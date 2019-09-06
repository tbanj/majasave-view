// import { isArray } from "util";

class ReferralStorage {
  storeItem(item) {
    let referral_list;
    // let arrayNote =[];
    // Check if any items in ls
    if (localStorage.getItem("referral_lists") === null) {
      referral_list = [];

      // Push new item
      if (Array.isArray(item)) {
        referral_list.push(...item);
      } else {
        referral_list.push(item);
      }
      console.log(referral_list);

      // Set ls
      localStorage.setItem("referral_lists", JSON.stringify(referral_list));
    } else {
      // Get what is already in ls
      referral_list = JSON.parse(localStorage.getItem("referral_lists"));

      // Push new item
      referral_list.push(item);
      // Reset ls
      localStorage.setItem("referral_lists", JSON.stringify(referral_list));
    }
  }

  getItemsFromStorage() {
    let referral_list;
    if (localStorage.getItem("referral_lists") === null) {
      referral_list = [];
      return referral_list;
    } else {
      referral_list = JSON.parse(localStorage.getItem("referral_lists"));
    }
    return referral_list;
  }

  updateItemStorage(updatedItem) {
    let referral_list = JSON.parse(localStorage.getItem("referral_lists"));

    referral_list.forEach(function (item, index) {
      if (updatedItem.id === item.id) {
        referral_list.splice(index, 1, updatedItem);
      }
    });
    localStorage.setItem("referral_lists", JSON.stringify(referral_list));
  }

  deleteItemFromStorage(id) {
    let referral_list = JSON.parse(localStorage.getItem("referral_lists"));

    referral_list.forEach(function (item, index) {
      if (id === item.id) {
        referral_list.splice(index, 1);
      }
    });
    localStorage.setItem("referral_lists", JSON.stringify(referral_list));
  }
  clearItemsFromStorage() {
    localStorage.removeItem("referral_lists");
  }

  nameLast() {
    return "how are you";
  }
}

export default ReferralStorage;
