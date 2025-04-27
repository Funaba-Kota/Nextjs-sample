# Next.jsのお勉強

## 新規プロジェクトを立ち上げてみる

Node.jsのインストール  
https://nodejs.org/ja

インストールチェック  
```
node -v  
npm -v  
npx -v
```

プロジェクトを新規作成してみる

```
npx create-next-app@latest
```

下記が確認されて次へ  
・バージョンの確認（create-next-app使用の場合、バージョン指定は・ここではできず最新のものになる）  
・インストールしたNext.jsのプロジェクト（フォルダ）名の設定  
・TypeScriptを使用するか  
・ESLintを使用するか  
・Tailwindを使用するか  
・srcディレクトリを追加するか  
・Appディレクトリの機能を使用するか  
・外部ファイルを指定する際のプロジェクトディレクトリの扱いについてのもの  
※また今度詳細確認する


ローカル起動

```
npm run dev  
```

![alt text](image.png)

 