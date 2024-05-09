const { table } = require("console");
const xlsxFile = require("read-excel-file/node");

const map = {
  Name: "시장명",
  Title: "소재지도로명주소",
  Salary: "소재지지번주소",
  
};
xlsxFile("./전통시장정보데이터(강원도).xlsx", { map }).then(({ rows }) => {
  console.log(rows);
  table(rows);
});