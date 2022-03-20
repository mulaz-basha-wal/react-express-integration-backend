let forumsList = [
  {
    id: 1,
    title: "Initial Forum Item",
    author: "Mulaz Basha",
    date: 1647751924326,
    body: "Initial forum body description",
  },
];

function forumsIndex(req, res) {
  res.json(forumsList);
}

function addForum(req, res) {
  const forum = {
    id: req.body.id,
    title: req.body.title,
    author: req.body.author,
    date: req.body.date,
    body: req.body.body,
  };
  forumsList.push(forum);
  res.json({
    message: "forum added successfully.",
  });
}

function forumDelete(req, res) {
  const id = parseInt(req.params.id);
  let tempList = [];
  forumsList.forEach((forum) => {
    if (forum.id !== id) tempList.push(forum);
  });
  forumsList = [...tempList];
  res.json({
    message: "Forum is deleted successfully",
  });
}

function forumDeleteAll(req, res) {
  forumsList = [];
  res.json({
    message: "All forums are removed successfully",
  });
}

module.exports = {
  forumsIndex,
  addForum,
  forumDelete,
  forumDeleteAll,
};
