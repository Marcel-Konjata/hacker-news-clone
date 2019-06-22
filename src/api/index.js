import Axios from "axios";

const BASE_URL = `https://hacker-news.firebaseio.com/v0`;

//querry string that goes to the end of URL request
const JSON = ".json?print=pretty";

// this will pull up from api indexes of stories

export function getStoriesIndexes(typeOfstory) {
   const response = Axios.get(`${BASE_URL}/${typeOfstory}${JSON}`).then(
      resolve => resolve.data.slice(0, 30)
   );
   return response;
}

//based on API index this will pull single object based on it's index

export function getItem(id) {
   const response = Axios.get(`${BASE_URL}/item/${id}${JSON}`);
   return response;
}

/* each post article or comment has array of indexes, due to fetching on multiple levels post is reusable 
I am not really huge fan of this approach but, i don't know how to bypass that
*/

/* I need something that will take all indexes from getStoriesIndex,
 will map or iterrate throught all values and create new array with objects inside of that,
 possible solulutions are promise.all - IDK how to implement it tho, async with combination of some of the for/map/foreach
 with await - this will be slow as hell it will couse fetching in sequence /// another sollution could be somehow implement reduce
*/

export function getAllItems(arrayOfIndexes) {
   return Promise.all(
      arrayOfIndexes.map(async itemID => {
         const item = await getItem(itemID);
         return item.data;
      })
   ).then(resolve => resolve);

   //test worked however performance is not  optimal
}

export const returnItemsfromAPI = async (typeOfstory) => {
   const arrayIndexes = await getStoriesIndexes(typeOfstory);
   let result = await getAllItems(arrayIndexes);
   return result;
};

