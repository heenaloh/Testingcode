const readQuestions = () => {
  const data = fs.readFileSync("frågor.json", "utf8");
  return JSON.parse(data);

}