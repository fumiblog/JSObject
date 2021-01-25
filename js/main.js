'use strict'
{
  //クラスを継承してみよう
  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }
    like() {
      this.likeCount++
      this.show();
    }
  }

  class SponsoredPost extends Post {
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`...sponsored by ${this.sponsor}`);
    }
  }
  const posts = [
    new Post('JavaScriptの勉強中・・・'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分間動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();

  //クラスを拡張したい場合を考えよう
  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 0;
  //   }

  //   show() {
  //     console.log(`${this.text} - ${this.likeCount} likes`);
  //   }
  //   like() {
  //     this.likeCount++
  //     this.show();
  //   }
  // }

  // class SponsoredPost {
  //   constructor(text, sponsor) {
  //     this.text = text;
  //     this.likeCount = 0;
  //     this.sponsor = sponsor;
  //   }

  //   show() {
  //     console.log(`${this.text} - ${this.likeCount} likes`);
  //     console.log(`...sponsored by ${this.sponsor}`);
  //   }
  //   like() {
  //     this.likeCount++
  //     this.show();
  //   }
  // }
  // const posts = [
  //   new Post('JavaScriptの勉強中・・・'),
  //   new Post('プログラミング楽しい！'),
  //   new SponsoredPost('3分間動画でマスターしよう', 'dotinstall'),
  // ];

  // posts[2].show();
  // posts[2].like();

  //32.静的メソッドを使ってみよう
  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 0;
  //   }

  //   show() {
  //     console.log(`${this.text} - ${this.likeCount} likes`);
  //   }
  //   like() {
  //     this.likeCount++
  //     this.show();
  //   }
  //   static showInfo() {
  //     console.log('post class version 1.0');
  //   }
  // }
  // const posts = [
  //   new Post('JavaScriptの勉強中・・・'),
  //   new Post('プログラミング楽しい！'),
  // ];
  // Post.showInfo();
  // posts[0].like();

  //31.カプセル化を理解しよう
  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 0;
  //   }

  //   show() {
  //     console.log(`${this.text} - ${this.likeCount} likes`);
  //   }
  //   like() {
  //     this.likeCount++
  //     this.show();
  //   }
  // }
  // const posts = [
  //   new Post('JavaScriptの勉強中・・・'),
  //   new Post('プログラミング楽しい！'),
  // ];
  // posts[0].like();
  // posts[0].show();
  // posts[1].show();

  //30.クラスを作ってみよう
  // class Post {
  //   constructor(text) {
  //     this.text = text;
  //     this.likeCount = 0;
  //   }

  //   show() {
  //     console.log(`${this.text} - ${this.likeCount}いいね`);
  //   }
  // }
  // const posts = [
  //   new Post('JavaScriptの勉強中・・・'),
  //   new Post('プログラミング楽しい！'),
  // ];
  // posts[0].show();
  // posts[1].show();

  //29.クラスの概念を理解しよう
  // constractで初期化、引数でインスタンスを作成

  //28. メソッドを使ってみよう
  // const posts = [
  //   {
  //     text: 'JavaScriptの勉強中・・・',
  //     likeCount: 0,
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     },
  //   },
  //   {
  //     text: 'プログラミング楽しい！',
  //     likeCount: 0,
  //     show() {
  //       console.log(`${this.text} - ${this.likeCount}いいね`);
  //     },
  //   },
  // ];
  // posts[0].show();
  // posts[1].show();

  //27.オブジェクトが複数ある場合を考えよう
  // const posts = [
  //   {
  //     text: 'JavaScriptの勉強中・・・',
  //     likeCount: 0,
  //   },
  //   {
  //     text: 'プログラミング楽しい！',
  //     likeCount: 0.
  //   },
  // ];
  // function show(post) {
  //   console.log(`${post.text} - ${post.likeCount}いいね`);
  // }
  // show(posts[0]);

  //26.例外処理を使ってみよう
  // const name = 5;
  // try {
  //   console.log(name.toUpperCase());
  // } catch (e) {
  //   console.log(e);
  // }
  // console.log('Finish!');

  //25.タイマー処理の違いを理解しよう
  //setIntervalは処理を始めてからの秒数で、setTimeoutは処理が終わってからの秒数

  //24.setTimeout()を使ってみよう
  // let i = 0
  // function showTime() {
  //   console.log(new Date());
  //   const timeoutId = setTimeout(showTime, 1000);
  //   i++;
  //   if (i > 2) {
  //     clearTimeout(timeoutId);
  //   }
  // }
  // showTime();

  //23.setInterval()を使ってみよう
  // let i = 0
  // function showTime() {
  //   console.log(new Date());
  //   i++;
  //   if (i > 5) {
  //     clearInterval(intervalId);
  //   }
  // }
  // const intervalId = setInterval(showTime, 1000);

  //22.alert()、confirm()を使ってみよう
  // alert('Hello');
  // const answer = confirm('削除しますか？');
  // if (answer) {
  //   console.log('削除しました');
  // } else {
  //   console.log('キャンセルしました');
  // }

  //21.特定の日時を扱ってみよう
  // const d = new Date(2019, 10);
  // d.setHours(10, 20, 30);
  // d.setDate(d.getDate() + 3);
  // console.log(d);

  //20.現在に知事を扱ってみよう
  // const d = new Date();
  // console.log(d);
  // console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`);
  //19.ランダムな整数値を作ってみよう
  // console.log(Math.floor(Math.random() * 6) + 1);

  //18.数値を操作してみよう
  // const scores = [10, 3, 9];
  // let sum = 0;
  // scores.forEach(score => {
  //   sum += score;
  // });
  // const avg = sum / scores.length;
  // console.log(avg);
  // console.log(sum);
  // console.log(Math.floor(avg));
  // console.log(Math.ceil(avg));
  // console.log(Math.round(avg));
  // console.log(avg.toFixed(3));
  // console.log(Math.random());

  //17,join()、split()を使ってみよう
  // const d = [2019, 11, 14];
  // console.log(d.join('/'));
  // console.log(d.join(''));
  // const t = '17:08:24';
  // console.log(t.split(':'));
  // const [hour, minute, second] = t.split(':');
  // console.log(hour);
  // console.log(minute);
  // console.log(second);

  //16.文字列を操作してみよう
  // const str = 'hello';
  // console.log(str.length);
  // console.log(str.substring(2, 4));
  // console.log(str[1]);

  //15.変数を代入してみよう
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x);
  // console.log(y);
  // let x = [1, 2];
  // let y = x;
  // x[0] = 5;
  // console.log(x);
  // console.log(y);
  // let x = [1, 2];
  // let y = [...x];
  // x[0] = 5;
  // console.log(x);
  // console.log(y);

  //14.Object.keys()を使ってみよう
  // const keys = Object.keys(point);
  // keys.forEach(key => {
  //   console.log(`Key: ${key} Value: ${point[key]}`);
  // });
  // const points = [
  //   { x: 30, y: 20 },
  //   { x: 10, y: 50 },
  //   { x: 40, y: 40 },
  // ];
  // console.log(points[1].y);

  //13.オブジェクトを操作してみよう
  // const otherProps = {
  //   r: 4,
  //   color: 'red',
  // };
  // const point = {
  //   x: 100,
  //   y: 180,
  //   ...otherProps,
  // };
  // const { x, r, ...others } = point;
  // console.log(x);
  // console.log(r);
  // console.log(others);

  //12.プロパティを使ってみよう
  // const point = {
  //   x: 100,
  //   y: 180,
  // };
  // point.x = 120;
  // point.z = 90;
  // delete point.y;
  // console.log(point);

  //11.objectを作ってみよう
  // const point = [100, 180];
  // const point = {
  //   x: 100,
  //   y: 180,
  // };
  // console.log(point);

}
