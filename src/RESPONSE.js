const data = {
    LOGIN: {
        success: true,
        token: "testCookieString"
        // success: false,
        // msg: "회원 정보가 일치하지 않습니다."
    },
    LOGIN_FAIL: {
        success: false,
        msg: "회원 정보가 일치하지 않습니다."
    },
    LOGOUT: {
        success: true
    },
    SIGNUP: {
        msg: "회원가입을 축하드립니다!",
        success: true
    },
    EMAIL_CHECK: {
        msg: "사용할 수 있는 닉네임입니다.",
        success: true,
        // msg : "이미 존재하는 이메일입니다.",
        // success: false
    },
    NICKNAME_CHECK: {
        msg: "사용할 수 있는 닉네임입니다.",
        success: true,
        // msg: "이미 존재하는 닉네임입니다.",
        // success: false
    },
    PASSWORD_CHECK: {
        msg: "사용할 수 있는 이메일입니다.",
        success: true
    },
    USER_PROFILE: [
        {
            userId: 0,
            email: "test@email.com",
            nickname: "닉네임0",
            MBTI: "MBTI",
            profilePicture: "프로필사진URL",
        },
        {
            userId: 1,
            email: "test12@email.com",
            nickname: "닉네임1",
            MBTI: "MBTI1",
            profilePicture: "프로필사진URL1",
        }
    ],
    PROFILE_CHECK : {
        msg: "수정되었습니다",
        success: true,
        // msg: "수정 실패하였습니다",
        // success: false,
    },
    POST_CHECK: {
        msg: "게시물이 작성되었습니다",
        success: true,
        // msg : "로그인이 필요한 기능입니다",
        // success: false,
    },
    EDIT_CHECK: {
        msg: "게시물이 수정되었습니다",
        success: true,
        //      msg : "게시물 수정이 실패했습니다",
        //      success: false,
    },
    POSTS: [
        {
            postId: 0,
            info: {
                songTitle: "곡 제목0",
                singer: "가수명0"
            },
            content: "게시글 내용0",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임0",
            MBTI: "ENTF",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 1,
            info: {
                songTitle: "곡 제목1",
                singer: "가수명1"
            },
            content: "게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1게시글 내용1",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임1",
            MBTI: "INFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 2,
            info: {
                songTitle: "곡 제목2",
                singer: "가수명2"
            },
            content: "게시글 내용2",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임2",
            MBTI: "ENFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 4,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 5,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 6,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 7,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        },
        {
            postId: 3,
            info: {
                songTitle: "곡 제목3",
                singer: "가수명3"
            },
            content: "게시글 내용3",
            imageUrl: "post_img.jpg",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            countComments: 9999,

            email: "test@email.com",
            nickname: "닉네임3",
            MBTI: "ISFJ",
            profilePicture: "프로필사진URL",
        }
    ],
    COMMENTS: [
        {
            commentId: 0,
            nickname: "닉네임0",
            content: "댓글입니다0",
            MBTI: "MBTI",
            createdAt: "2022-99-99, 99:99",
            profilePicture: "프로필사진URL",
        },
        {
            commentId: 1,
            nickname: "닉네임1",
            content: "댓글입니다1",
            MBTI: "MBTI",
            createdAt: "2022-99-99, 99:99",
            profilePicture: "프로필사진URL",
        },
        {
            commentId: 2,
            nickname: "닉네임2",
            content: "댓글입니다2",
            MBTI: "MBTI",
            createdAt: "2022-99-99, 99:99",
            profilePicture: "프로필사진URL",
        },
        {
            commentId: 3,
            nickname: "프론트 찌끄레기",
            content: "2조 아좌좌 화이팅! 2조 아좌좌 화이팅! 2조 아좌좌 화이팅! 2조 아좌좌 화이팅! 2조 아좌좌 화이팅!",
            MBTI: "INTP",
            createdAt: "2022-08-14, 12:32",
            profilePicture: "🌅",
        },
    ],
    DETAIL: {
        poster: {
            userId: 0,
            nickname: "닉네임3",
            MBTI: "MBTI",
            profilePicture: "프로필사진URL",
            createdAt: "2022-99-99, 99:99",
            likeNum: 9999,
            imageUrl: "앨범 커버 사진.jpg",
            info: {
                songTitle: "곡 제목",
                singer: "가수명"
            },
            content: "게시물 내용"        
        },
        commenter: [
            {
                commentId: 0,
                nickname: "닉네임0",
                content: "코멘트 내용",
                profilePicture: "프로필사진URL",
                MBTI: "MBTI",
                createdAt: "2022-99-99, 99:99",
            },
            {
                commentId: 1,
                nickname: "닉네임1",
                content: "코멘트 내용",
                profilePicture: "프로필사진URL",
                MBTI: "MBTI",
                createdAt: "2022-99-99, 99:99",
            }
        ]
    }
}

export default data