import express from "express"
const router= express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
}); 
router.get("/api/graphql", (req, res)=> {
  res.render("graphql", {title: "Quiz"})
})

export default router