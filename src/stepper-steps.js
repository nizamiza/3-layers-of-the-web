import img0 from './assets/html-semantic-subtle-1.png';
import img1 from './assets/html-semantic-subtle-2.png';
import img2 from './assets/html-semantic-subtle-3.png';
import img3 from './assets/html-semantic-subtle-4.png';
import img4 from './assets/html-semantic-subtle-7.png';
import img5 from './assets/html-semantic-subtle-8.png';


export const semanticMarkupSolution1 = [
[`<section class="speakers">`, [1, 1]],
[`<section class="speakers">
  <article class="speaker">`, [2, 2]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">`, [3, 3]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">`, [4, 4]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">
    </figure>`, [5, 5]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">
    </figure>
    <section className="info">`, [6, 6]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">
    </figure>
    <section className="info">
      <h4>Lukáš Gavuliak</h4>`, [7, 7]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">
    </figure>
    <section className="info">
      <h4>Lukáš Gavuliak</h4>
      <p>VUB Banka</p>`, [8, 8]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">
    </figure>
    <section className="info">
      <h4>Lukáš Gavuliak</h4>
      <p>VUB Banka</p>
      <p>Obchodný riaditeľ</p>
    </section>`, [9, 9]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">
    </figure>
    <section className="info">
      <h4>Lukáš Gavuliak</h4>
      <p>VUB Banka</p>
      <p>Obchodný riaditeľ</p>
    </section>`, [6, 10]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">
      <figcaption>
        <h4>Lukáš Gavuliak</h4>
        <p>VUB Banka</p>
        <p>Obchodný riaditeľ</p>
      </figcaption>
    </figure>`, [5, 9]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">
      <figcaption>
        <h4>Lukáš Gavuliak</h4>
        <p>VUB Banka</p>
        <p>Obchodný riaditeľ</p>
      </figcaption>
    </figure>
  </article>`, [1, 11]],
[`<section class="speakers">
  <article class="speaker">
    <figure className="avatar">
      <img src="fake_lukas.png">
      <figcaption>
        <h4>Lukáš Gavuliak</h4>
        <p>VUB Banka</p>
        <p>Obchodný riaditeľ</p>
      </figcaption>
    </figure>
  </article>`, [1, 1]],
];

export const semanticMarkupSolution1Images = [
  img0,
  img1,
  img2,
  img3,
  img5,
];

export const semanticMarkupSolution2 = [
  [`<section class="speakers">`, [1, 1]],
  [`<ul class="speakers">`, [1, 1]],
  [`<ul class="speakers">
    <li class="speaker">`, [2, 2]],
  [`<ul class="speakers">
    <li class="speaker">
      <figure className="avatar">
        <img src="fake_lukas.png">
        <figcaption>
          <h4>Lukáš Gavuliak</h4>
          <p>VUB Banka</p>
          <p>Obchodný riaditeľ</p>
        </figcaption>
      </figure>
    </li>`, [1, 12]],
];

export const semanticMarkupSolution2Images = [
  img0,
  img4,
];

export const accessibleMarkup = [
  [`<li class="speaker">
  <figure className="avatar">
    <img src="f_lukas.png">
    <figcaption>
      <h4>Lukáš Gavuliak</h4>
      <p>VUB Banka</p>
      <p>Obchodný riaditeľ</p>
    </figcaption>
  </figure>
</li>`, [1, 10]],
  [`<li class="speaker">
  <figure className="avatar">
    <img src="f_lukas.png">
    <figcaption>
      <h4>Lukáš Gavuliak</h4>
      <p>VUB Banka</p>
      <p>Obchodný riaditeľ</p>
    </figcaption>
  </figure>
</li>`, [3, 3]],
  [`<li class="speaker">
  <figure className="avatar">
    <img src="f_lukas.png" alt="Lukáš Gavuliak">
    <figcaption>
      <h4>Lukáš Gavuliak</h4>
      <p>VUB Banka</p>
      <p>Obchodný riaditeľ</p>
    </figcaption>
  </figure>
</li>`, [3, 3]],
];
