import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'

import styled from "styled-components";
import { checkUser, signOutUser } from '../redux/modules/user'

import Header from "../components/Header"
import Main from "../pages/Main";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import Post from "../pages/Post";
import DetailPage from "../pages/DetailPage";
import NotFound from "../pages/NotFound";
import MyPage from "../pages/MyPage";
import Edit from "../pages/Edit";

const Router = () => {
  const dispatch = useDispatch();
  const userLoggin = useSelector(state => state.user.loggin);
  
  // 로그인 토큰 확인
  useEffect(()=> {
    dispatch(checkUser())
  }, [])

  return (
    <>
      <Header userLoggin={userLoggin} />
      <Layout>
        <Routes>

          <Route path="/" element={<Main/>}/>
          <Route path="/post/" element={<Post />}/>
          <Route path="/post/:postId/edit" element={<Edit />}/>
          <Route path="/post/:postId" element={<DetailPage />}/>
          <Route path="/sign/in" element={<Login userLoggin={userLoggin} />} />
          <Route path="/sign/up" element={<SignUp />}/>
          <Route path="/mypage" element={<MyPage />}/>
          <Route path="/mypage/:userId/profile" element={<Profile />}/>
          <Route path="*" element={<NotFound />}/>

        </Routes>
      </Layout>
    </>
  );
};

export default Router;

const Layout = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
`