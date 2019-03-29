import { decorate, observable, action, configure } from "mobx";

configure({ enforceActions: "observed" });

class Store {
  searchKeyword = "";
  data = [];
  loading = true;

  handleSearch(keyword) {
    this.searchKeyword = keyword;
  }

  updateData(data) {
    this.data = data;
  }

  showLoader() {
    this.loading = true;
  }

  hideLoader() {
    console.log("test");
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
