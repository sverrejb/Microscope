Template.commentItem.helpers({
    submittedText: function() {
        return this.submitted.toString();
    },
    commentsCount: function() {
        return Comments.find({postId: this._id}).count();
    }
});
