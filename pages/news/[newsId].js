import { useRouter } from "next/router";

//our-domain.com/something-important
function DetailPage() {
  const router = useRouter();

  const newsId =  router.query.newsId;
 
  //send a request to the backend api
  //to fetch the news item with newsId

  return <h1>The Detail Page</h1>;
}

export default DetailPage;
