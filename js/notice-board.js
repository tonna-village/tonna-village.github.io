(function() {
  const noticeBoard = $("#notice-board");
  const posts = [
    {
      title: "This is a title",
      description: "Here's a description...",
      postedBy: "John Doe",
      dateCreated: "5th June 2018"
    }
  ];

  if (posts.length < 1) {
    noticeBoard.append("<p>😔 Looks like there are no posts yet...</p>");
    return;
  }

  posts.forEach(function(post) {
    const element = $(`
      <div class="card spacing-md">
        <p class="card--title">${post.title}</p>
        <p class="card--description">${post.description}</p>
        <p class="card--meta">Posted ${post.dateCreated} - by ${post.postedBy}</p>
      </div>
    `);
    noticeBoard.append(element);
  });
})();
