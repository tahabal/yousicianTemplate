import { decorate, observable, action, configure } from "mobx";
import data from "./songs.json";

configure({ enforceActions: "observed" });

class Store {
  searchKeyword = "";
  data = [];
  loading = true;
  isSearchFilterActive = false;
  loadedDataCount = 0;

  handleSearch(keyword) {
    this.searchKeyword = keyword;
    if (keyword === "") {
      this.isSearchFilterActive = false;
    } else {
      this.isSearchFilterActive = true;
    }
    this.fetchData();
  }

  //data fetching logic
  fetchData() {
    switch (this.isSearchFilterActive) {
      case true:
        this.data = data
          .filter(
            val =>
              val.title
                .toLocaleLowerCase("en-EN")
                .includes(this.searchKeyword) ||
              val.artist.toLocaleLowerCase("en-EN").includes(this.searchKeyword)
          )
          .slice(0, 15);
        this.loadedDataCount = this.data.length;
        break;
      case false:
        this.data = data.slice(0, 15);
        this.loadedDataCount = this.data.length;
        break;
      default:
        break;
    }
  }

  //data fetching logic for scrollevent
  fetchMore() {
    if (data.length <= this.loadedDataCount) {
      //error handling can be done here, if not on API call. since i am not using external API...
      console.log("These are not the droids that you are looking for...");
      return;
    }

    console.log("CALLED");
    let moreData;
    switch (this.isSearchFilterActive) {
      case true:
        moreData = data
          .filter(
            val =>
              val.title
                .toLocaleLowerCase("en-EN")
                .includes(this.searchKeyword) ||
              val.artist.toLocaleLowerCase("en-EN").includes(this.searchKeyword)
          )
          .slice(this.loadedDataCount, this.loadedDataCount + 15);
        this.data = this.data.concat(moreData);
        this.loadedDataCount = this.data.length;
        break;
      case false:
        moreData = data.slice(this.loadedDataCount, this.loadedDataCount + 15);
        this.data = this.data.concat(moreData);
        this.loadedDataCount = this.data.length;
        break;
      default:
        break;
    }
  }

  //shows application-wide loader
  showLoader() {
    this.loading = true;
  }

  //hides said loader
  hideLoader() {
    this.loading = false;
  }
}

decorate(Store, {
  searchKeyword: observable,
  handleSearch: action,
  loading: observable,
  data: observable,
  fetchMore: action,
  fetchData: action,
  showLoader: action,
  hideLoader: action
});

const appStore = new Store();

export default appStore;
