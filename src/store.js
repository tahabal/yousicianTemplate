import { decorate, observable, action, configure } from "mobx";

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

  updateData(data) {
    this.data = data;
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
