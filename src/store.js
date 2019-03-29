import { decorate, observable, action, configure } from "mobx";
import debounce from "lodash/debounce";
import data from "./songs.json";

configure({ enforceActions: "observed" });

class Store {
  searchKeyword = "";
  data = [];
  loading = false;
  starting = false;
  isSearchFilterActive = false;
  loadedDataCount = 0;
  currentLevelFilterValue = null;
  scrollFetchLastCallTime = new Date();

  handleSearch(keyword) {
    this.searchKeyword = keyword;
    if (keyword === "") {
      this.isSearchFilterActive = false;
    } else {
      this.isSearchFilterActive = true;
    }

    this.debouncedFetch();
  }

  //to prevent a request at every typing action
  debouncedFetch = debounce(this.fetchData, 1000);

  //level filter handler
  changeLevelFilter(val) {
    this.currentLevelFilterValue = val;
    this.fetchData();
  }

  filterByKeyword(data) {
    let container = data.filter(
      val =>
        val.title.toLocaleLowerCase("en-EN").includes(this.searchKeyword) ||
        val.artist.toLocaleLowerCase("en-EN").includes(this.searchKeyword)
    );

    return container;
  }

  filterByLevel(data) {
    let container = data.filter(
      val => val.level == this.currentLevelFilterValue
    );

    return container;
  }

  //data fetching logic
  fetchData() {
    console.log("test");
    let container;
    switch (this.isSearchFilterActive) {
      case true:
        container = this.filterByKeyword(data);
        this.currentLevelFilterValue &&
          (container = this.filterByLevel(container));

        this.data = container.slice(0, 15);
        this.loadedDataCount = this.data.length;
        break;
      case false:
        container = data;
        this.currentLevelFilterValue &&
          (container = this.filterByLevel(container));

        this.data = container.slice(0, 15);
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

    let moreData;
    let container;
    switch (this.isSearchFilterActive) {
      case true:
        moreData = this.filterByKeyword(data);
        this.currentLevelFilterValue &&
          (moreData = this.filterByLevel(moreData));

        container = moreData.slice(
          this.loadedDataCount,
          this.loadedDataCount + 15
        );
        this.data = this.data.concat(container);
        this.loadedDataCount = this.data.length;
        break;
      case false:
        container = data;
        this.currentLevelFilterValue && (container = this.filterByLevel(data));

        if (container.length <= this.loadedDataCount) {
          break;
        }

        moreData = container.slice(
          this.loadedDataCount,
          this.loadedDataCount + 15
        );

        this.data = this.data.concat(moreData);
        this.loadedDataCount = this.data.length;
        break;
      default:
        break;
    }
  }

  //scroll fetch call time updater
  updateFetchCallTime() {
    this.scrollFetchLastCallTime = new Date();
  }

  //shows list loader
  showLoader() {
    this.loading = true;
  }

  //hides list loader
  hideLoader() {
    this.loading = false;
  }

  //shows fullscreen loader
  showFullLoader() {
    this.starting = true;
  }

  //hides fullscreen loader
  hideFullLoader() {
    this.starting = false;
  }
}

decorate(Store, {
  searchKeyword: observable,
  scrollFetchLastCallTime: observable,
  updateFetchCallTime: action,
  currentLevelFilterValue: observable,
  changeLevelFilter: action,
  handleSearch: action,
  loading: observable,
  starting: observable,
  data: observable,
  fetchMore: action,
  fetchData: action,
  showLoader: action,
  hideLoader: action,
  showFullLoader: action,
  hideFullLoader: action
});

const appStore = new Store();

export default appStore;
