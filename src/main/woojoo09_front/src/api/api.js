import axios from "axios";
import { useContext } from 'react'; // useContext를 불러온다.
import { UserInfoContextStore } from "../stores/UserInfoContext"
import { getCookie } from "../util/cookie";
const HEADER = {"Content-type" : "application/json"}
// const HEADER = 'application/json';
const BASE_URL = "http://localhost:9009/developerkirby/";

axios.defaults.withCredentials = true; // withCredentials 전역 설정
  // const cookieSet = {
  //   withCredentials: true
  // 안되면 헤더 앞에 이 object 추가해서 보내기}
const api = {
  tokencheck: async function() {
    const tokenCmd = {
      cmd : "tokencheck"
    }
    return await axios.post(BASE_URL + "tokencheck", tokenCmd, HEADER);
  },

  maketokentest: async function() {
    const testCmd = {
      cmd: "test"
    }
    return await axios.post(BASE_URL+ "test", testCmd, HEADER);
  },
  tradeSearchSelect: async function(target) {
    const searchSelectCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "searchselect", searchSelectCmd, HEADER);
  },
  chatReadCheck: async function() {
    const chatReadCheckCmd = {
      cmd: "chatReadCheck"
    }
    return await axios.post(BASE_URL+ "chatreadcheck", chatReadCheckCmd, HEADER);
  },
  tradeSelect: async function(option, city, town) {
    const tradeSelectCmd = {
      option: option,
      city: city,
      town: town
    }
    return await axios.post(BASE_URL+ "tradeselect", tradeSelectCmd, HEADER);
  },
  starInsert: async function(target) {
    const starInsertCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "starinsert", starInsertCmd, HEADER);
  },
  tradeInsert: async function(
    representUrl, imgUrl, product, price, limitPartner, dueDate, tradeMethod, city, town, tradePlace, productDetail) {
    const tradeInsertCmd = {
      representUrl: representUrl,
      imgUrl: imgUrl,
      product: product,
      price: price,
      limitPartner: limitPartner,
      dueDate: dueDate,
      tradeMethod: tradeMethod,
      city: city,
      town: town,
      tradePlace: tradePlace,
      productDetail: productDetail
    }
    return await axios.post(BASE_URL+ "tradeinsert", tradeInsertCmd, HEADER);
  },
  tradeDetailSelect: async function(target) {
    const tradeDetailSelectCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "tradedetailselect", tradeDetailSelectCmd, HEADER);
  },
  partnerInsert: async function(target) {
    const partnerInsertCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "partnerinsert", partnerInsertCmd, HEADER);
  },
  complainInsert: async function(target) {
    const complainInsertCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "complaininsert", complainInsertCmd, HEADER);
  },
  tradeDelete: async function(target) {
    const tradeDeleteCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "tradedelete", tradeDeleteCmd, HEADER);
  },
  doneTradeUpdateFull: async function(target) {
    const doneTradeUpdateFullCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "donetradeupdatefull", doneTradeUpdateFullCmd, HEADER);
  },
  doneTradeUpdateDone: async function(target) {
    const doneTradeUpdateDoneCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "donetradeupdatedone", doneTradeUpdateDoneCmd, HEADER);
  },
  hostTradeSelect: async function() {
    const hostTradeSelectCmd = {
      cmd : "hostTradeSelect"
    }
    return await axios.post(BASE_URL+ "hosttradeselect", hostTradeSelectCmd, HEADER);
  },
  partnertTradeSelectReject: async function(target) {
    const partnertTradeSelectRejectCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "partnertradeselectreject", partnertTradeSelectRejectCmd, HEADER);
  },
  partnerTradeSelectOngoing: async function(target) {
    const partnerTradeSelectOngoingCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "partnertradeselectongoing", partnerTradeSelectOngoingCmd, HEADER);
  },
  partnerTradeSelectDone: async function(target) {
    const partnerTradeSelectDonetCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "partnertradeselectdone", partnerTradeSelectDonetCmd, HEADER);
  },
  starTradeSelect: async function(target) {
    const starTradeSelectCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "startradeselect", starTradeSelectCmd, HEADER);
  },
  goodInsert: async function(target) {
    const goodInsertCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "goodinsert", goodInsertCmd, HEADER);
  },
  dislikeInsert: async function(target) {
    const dislikeInsertCmd = {
      target: target
    }
    return await axios.post(BASE_URL+ "dislikeinsert", dislikeInsertCmd, HEADER);
  },
}

export default api;