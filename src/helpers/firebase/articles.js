import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./connection";

function getArticles() {
  return getDocs(collection(db, "articles"));
}

function getArticleById(id) {
  const q = query(collection(db, "articles"), where("id", "==", id));
  return getDocs(q);
}

function addArticle(
  id,
  title,
  article,
  resume,
  author,
  thumb,
  referThumb,
  created
) {
  return addDoc(collection(db, "articles"), {
    id,
    title,
    article,
    resume,
    author,
    thumb,
    referThumb,
    created,
  });
}

async function deleteArticle(id) {
  let articleId = null;
  const querySnapshot = await getArticleById(id);
  querySnapshot.forEach((doc) => {
    articleId = doc.id;
  });

  await deleteDoc(doc(db, "articles", articleId));
}

export { getArticles, getArticleById, addArticle, deleteArticle };
