// common

Telescope.registerComponent("Footer", require('./common/Footer.jsx'));
Telescope.registerComponent("Header", require('./common/Header.jsx'));
Telescope.registerComponent("Layout", require('./common/Layout.jsx'));
Telescope.registerComponent("Logo", require('./common/Logo.jsx'));
Telescope.registerComponent("Flash", require('./common/Flash.jsx'));
Telescope.registerComponent("FlashMessages", require('./common/FlashMessages.jsx'));
Telescope.registerComponent("NewsletterForm", require('./common/NewsletterForm.jsx'));
Telescope.registerComponent("Icon", require('./common/Icon.jsx'));

// posts

Telescope.registerComponent("LoadMore", require('./posts/list/LoadMore.jsx'));
Telescope.registerComponent("NoMorePosts", require('./posts/list/NoMorePosts.jsx'));
Telescope.registerComponent("NoPosts", require('./posts/list/NoPosts.jsx'));
Telescope.registerComponent("PostItem", require('./posts/list/PostItem.jsx'));
Telescope.registerComponent("PostsLoading", require('./posts/list/PostsLoading.jsx'));
Telescope.registerComponent("PostViews", require('./posts/list/PostViews.jsx'));
Telescope.registerComponent("PostList", require('./posts/list/PostList.jsx'));
Telescope.registerComponent("PostCategories", require('./posts/list/PostCategories.jsx'));
Telescope.registerComponent("PostCommenters", require('./posts/list/PostCommenters.jsx'));
Telescope.registerComponent("Post", require('./posts/Post.jsx'));
Telescope.registerComponent("PostStats", require('./posts/PostStats.jsx'));
Telescope.registerComponent("PostDaily", require('./posts/PostDaily.jsx'));
Telescope.registerComponent("PostDay", require('./posts/PostDay.jsx'));
Telescope.registerComponent("Vote", require('./posts/Vote.jsx'));

// comments

Telescope.registerComponent("CommentItem", require('./comments/list/CommentItem.jsx'));
Telescope.registerComponent("CommentList", require('./comments/list/CommentList.jsx'));
Telescope.registerComponent("CommentNode", require('./comments/list/CommentNode.jsx'));
Telescope.registerComponent("CommentNew", require('./comments/list/CommentNew.jsx'));
Telescope.registerComponent("CommentEdit", require('./comments/list/CommentEdit.jsx'));

// categories

Telescope.registerComponent("CategoriesList", require('./categories/list/CategoriesList.jsx'));

// permissions

Telescope.registerComponent("CanCreatePost", require('./permissions/CanCreatePost.jsx'));
Telescope.registerComponent("CanEditPost", require('./permissions/CanEditPost.jsx'));
Telescope.registerComponent("CanView", require('./permissions/CanView.jsx'));
Telescope.registerComponent("CanViewPost", require('./permissions/CanViewPost.jsx'));
Telescope.registerComponent("CanEditUser", require('./permissions/CanEditUser.jsx'));

// users

Telescope.registerComponent("UsersEdit", require('./users/UsersEdit.jsx'));
Telescope.registerComponent("UsersSingle", require('./users/UsersSingle.jsx'));
Telescope.registerComponent("UserAvatar", require('./users/UserAvatar.jsx'));

// debug

Telescope.registerComponent("Cheatsheet", require('./debug/Cheatsheet.jsx'));
