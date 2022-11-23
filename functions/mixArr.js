import React from "react";

const mixArr = (arr) => arr.map(i => [Math.random(), i]).sort().map(i=>i[1]);

export default mixArr;