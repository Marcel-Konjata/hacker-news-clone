import React, { Component } from "react";
import { getItem, getAllItems } from "../api";
import Comment from "./Comment";
import Story from "./Story";
import Loading from "./Loading";


export class Comments extends Component {
   state = { comments: [], story: [] };
   componentDidMount() {
      (async () => {
         const item = await getItem(this.props.match.params.id);
         const indexes = item.data.kids;
         this.setState({ story: item.data });
         const result = await getAllItems(indexes).then(resolve => resolve);
         this.setState({ comments: result });
      })();
   }

   renderComments = () => {
      const comments = this.state.comments.map(item => {
         return <Comment {...item} key={item.id} />;
      });
      return comments;
   };

   render() {
      return this.state.comments.length ? (
         <div className="comments-wrapper">
            <Story info={this.state.story} />
            {this.renderComments()}
         </div>
      ) : (
         <Loading />
      );
   }
}

export default Comments;
