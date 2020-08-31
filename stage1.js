obstacle = document.getElementsByClassName("obstacle");
//onmousemoveで当たり判定を作る
for(var i = 0; i < obstacle.length; i++){
  obstacle[i].onmousemove = () => {
    document.write('<h1>ゲームオーバー！</h1>リスタートは(ここで)F5キー');
  };
}


finish = document.getElementById("finish");
//クリアの処理
finish.onclick = () => {
  document.write('<h1>おめでとう！</h1>リスタートは(ここで)F5キー');
};
