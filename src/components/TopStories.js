import React from "react";
import { returnItemsfromAPI } from "./../api";
import Story from "./Story";
import { ThemeConsumer } from "./../context";
import Loading from "./Loading";

class TopStories extends React.Component {
   state = { topstories: [] };

   componentDidMount() {
      returnItemsfromAPI("topstories").then(resolve => {
         this.setState({ topstories: resolve });
      });
   }

   renderArticles = () => {
      const Articles = this.state.topstories.map(item => {
         return <Story key={item.id} info={{ ...item }} />;
      });
      return Articles;
   };

   render() {
      return (
         <ThemeConsumer>
            {({theme})=>(
               <div className={`stories-wrapper ${theme}`}>
                  {this.state.topstories.length
                     ? this.renderArticles()
                     : <Loading />}
               </div>
            )}
         </ThemeConsumer>
       
      );
   }
}

export default TopStories;
