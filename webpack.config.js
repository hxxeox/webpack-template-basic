

//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// export
module.exports = {
    //파일을 읽어들이기 시작하는 진입점 설정
    entry:'./js/main.js', // parcel main.js 쓰는거랑 똑같다

    //결과물(번들)을 반환하는 설정
    output:{
        //resolve는 첫번째 인수와 두번째 인수에 있는 경로를 합쳐주는 역할을 한다.
        //path:path.resolve(__dirname,'dist'), // 절대경로로 작성해야 한다.
        //filename:'main.js',
        clean: true
    },

    module: {
        rules:[
            {
                // 정규 표현식 이스케이프문자로 css로 끝나는 파일을 찾겠다는 뜻
                test:/\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns: [
                // static에서 부터 Copy가 된다.
                {from:'static'}
                // 아래에 다른 여러개의 경로도 설정이 가능하다.
            ]
        })
    ],
    devServer: {
        host:'localhost'
    }
}