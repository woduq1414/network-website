





$(function () {
    $("#nav-placeholder").html(
        `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">네트워크 관리사 요약</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="./page1.html">필기 <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="./page2.html">실기(케이블 만들기)</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="./page3.html">실기(문제 풀이)</a>
        </li>

      </ul>
    </div>
</nav>
`
    );
});