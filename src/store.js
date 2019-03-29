import { decorate, observable, action, configure } from "mobx";

configure({ enforceActions: "observed" });

class Store {
  searchKeyword = "";
  data = [];

  handleSearch(keyword) {
    this.searchKeyword = keyword;
  }

  updateData(data) {
    this.data = data;
  }
}

decorate(Store, {
  searchKeyword: observable,
  handleSearch: action
});

const appStore = new Store();

export default appStore;
