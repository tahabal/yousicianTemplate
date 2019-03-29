import { decorate, observable, action, configure } from "mobx";
import data from "./songs.json";

configure({ enforceActions: "observed" });

class Store {
  searchKeyword = "";
  data = [];
  loading = true;
  isSearchFilterActive = false;

  handleSearch(keyword) {
    this.searchKeyword = keyword;
    if (keyword === "") {
      this.isSearchFilterActive = false;
    } else {
      this.isSearchFilterActive = true;
    }
  }

  fetchData() {
    //fake some network lag
    setTimeout(() => {
      this.data = data;
      this.hideLoader();
    }, 1500);
  }

  showLoader() {
    this.loading = true;
  }

  hideLoader() {
    this.loading = false;
  }
}

decorate(Store, {
  searchKeyword: observable,
  handleSearch: action,
  updateData: action,
  showLoader: action,
  hideLoader: action
});

const appStore = new Store();

export default appStore;
