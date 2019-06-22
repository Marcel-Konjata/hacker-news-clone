import React from "react";
import { returnItemsfromAPI } from "./../api";
import Story from "./Story";
import { ThemeConsumer } from "./../context";
import Loading from "./Loading";

class NewStories extends React.Component {
   state = { newstories: [] };

   componentDidMount() {
      returnItemsfromAPI("newstories").then(resolve => {
         this.setState({ newstories: resolve });
      });
   }

   renderArticles = ()=> {
      const Articles = this.state.newstories.map(item => {
         return <Story key={item.id} info={{ ...item }} />;
      });
      return Articles;
   };

   render() {
      return (
         <ThemeConsumer>
            {({theme})=>(
               <div className={`stories-wrapper ${theme}`}>
                  {this.state.newstories.length
                     ? this.renderArticles()
                     : <Loading/>}
               </div>
            )}
         </ThemeConsumer>
      );
   }
}

export default NewStories;
