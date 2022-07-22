import express from "express";
const router = express.Router();

import { food_model } from "../config/mongoConfig.js";

router.get("/selectAll", (req, res) => {
  food_model.find({}).then((result) => res.json(result));
});

// POST localhost:3000/food/insert
router.post("/insert", (req, res) => {
  console.log(req.body);
  food_model.create(req.body);
  res.json({ OK: "OK" });
});
/*
REST Ful 방식의 delete RequestMethod로 요청을 받고
주소창에 전달된 값을 id params 변수에 받아 확인하기
*/

router.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  console.log("받은 ID", id);
  /*
   mongoose 모델의 findOneAndDelete 함수를 호출하여
   d_id 값이 id와 일치하는 데이터를 삭제하라
   findOneAndRemove : findInAndModify로 변경되었다
   실제로 삭제하려면 findOneAndDelete
   */
  food_model.findOneAndDelete({ d_id: id }).exec().then(res.send("OK"));
});

export default router;
/*
REST ful 방식의 요청
router, Controller에서 사용하는 RequestMethod
get : 데이터를 요청할 때
post : 데이터를 추가할 때
delete : 데이터를 삭제할 때
put : 데이터를 업데이트할 때
 */
