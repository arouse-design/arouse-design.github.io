(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  --color1: #65c174;\n  --color2: #E1BDB22E;\n}\nbody {\n  margin: 0px;\n}\n.container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\np {\n  font-size: 40px;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  cursor: default;\n  color: var(--color1);\n}\napp-navbar {\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  z-index: 100;\n}\n.ere {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\napp-landing-page {\n  position: absolute;\n  top: 0;\n  z-index: 50;\n}\nhtml {\n  background-color: var(--color2);\n}\n.homeImage {\n  transition: 1s ease;\n  width: 40vw;\n  box-shadow: 35px 35px 0px 5px #ffeac3;\n}\n.enlarged .homeImage {\n  transition: 1s;\n  width: 60vw;\n  box-shadow: 35px 35px 0px 10000px #ffeac3;\n}\n.imageCont {\n  margin: 50px 50px;\n  right: 0;\n  transition: 1s ease;\n}\n.mainPage {\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 50px;\n}\n.pageContent {\n  margin-top: 100px;\n  display: flex;\n  padding: 40px;\n  justify-content: space-around;\n  align-items: center;\n}\n.mainContainer {\n  display: flex;\n}\n.mainContainer p {\n  font-size: 20px;\n  font-family: \"Open Sans Condensed\", sans-serif;\n  cursor: default;\n  color: var(--color1);\n}\n.mainContainer h1 {\n  font-family: \"Open Sans Condensed\", sans-serif;\n  cursor: default;\n  color: var(--color1);\n}\n.showOnhover {\n  position: relative;\n  top: -50%;\n  left: 50%;\n}\n.subImage {\n  width: 20vw;\n}\n.subContainer {\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.textCont {\n  margin-left: 20px;\n  width: 40vw;\n}\nimg {\n  border-radius: 20px;\n}\n.logo {\n  margin-top: 10px;\n  margin-left: 10px;\n  width: 100px;\n}\n.LandingLogo {\n  margin-top: 10px;\n  margin-left: 10px;\n  width: 300px;\n  transition: 0.3s;\n}\n.LandingLogo:hover, .center:hover {\n  transform: scale(1.2);\n  transition: 0.3s;\n}\n.LandingLogo:hover:active, .center:hover:active {\n  transform: scale(1.1);\n  transition: 0.3s;\n}\n.center {\n  position: absolute;\n  top: calc(50vh + 150px);\n  left: calc(50vw - 50px);\n  transition: 0.3s;\n}\n.content {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9GOlxcQW15V2ViXFxhbXktYXBwL3NyY1xcc3R5bGVzLnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOEVBQUE7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVBO0VBQ0ksV0FBQTtBQ0NKO0FEQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRUo7QURBQTtFQUNJLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0dKO0FEREE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNDLE1BQUE7RUFJRCxZQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQUE7RUFDSSwrQkFBQTtBQ0dKO0FEREE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxxQ0FBQTtBQ0lKO0FERkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FDS0o7QURIQTtFQUNJLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0FDTUo7QURGQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNLSjtBREZBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREhBO0VBQ0ksYUFBQTtBQ01KO0FESEE7RUFDSSxlQUFBO0VBQ0EsOENBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNNSjtBREpBO0VBQ0ksOENBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNPSjtBRExBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtBQ1FKO0FETkE7RUFDSSxXQUFBO0FDU0o7QUROQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDU0o7QURQQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtBQ1VKO0FEUkE7RUFDSSxtQkFBQTtBQ1dKO0FEVEE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ1lKO0FEVkE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDYUo7QURYQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNjSjtBRFpBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBQ2VKO0FEYkE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ2dCSjtBRGRBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2lCSiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbjpyb290e1xuICAgIC0tY29sb3IxIDogIzY1YzE3NDtcbiAgICAtLWNvbG9yMiA6ICNFMUJEQjIyRTtcbn1cbmJvZHl7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xufVxuYXBwLW5hdmJhcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgICB0b3A6IDA7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IxKTtcbiAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgei1pbmRleDogMTAwO1xuICAgIC8vIHJpZ2h0OiAwO1xufVxuLmVyZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmFwcC1sYW5kaW5nLXBhZ2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiA1MDtcbn1cbmh0bWx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcbn1cbi5ob21lSW1hZ2V7XG4gICAgdHJhbnNpdGlvbjogMXMgZWFzZTtcbiAgICB3aWR0aDogNDB2dztcbiAgICBib3gtc2hhZG93OiAzNXB4IDM1cHggMHB4IDVweCAjZmZlYWMzO1xufVxuLmVubGFyZ2VkIC5ob21lSW1hZ2V7XG4gICAgdHJhbnNpdGlvbjogMXM7XG4gICAgd2lkdGg6IDYwdnc7XG4gICAgYm94LXNoYWRvdzogMzVweCAzNXB4IDBweCAxMDAwMHB4ICNmZmVhYzM7XG59XG4uaW1hZ2VDb250e1xuICAgIG1hcmdpbjogNTBweCA1MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IDFzIGVhc2U7XG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xufVxuXG4ubWFpblBhZ2V7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5wYWdlQ29udGVudHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDQwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluQ29udGFpbmVyIHB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcjEpO1xufVxuLm1haW5Db250YWluZXIgaDF7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG59XG4uc2hvd09uaG92ZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTUwJTtcbiAgICBsZWZ0OiA1MCU7XG59XG4uc3ViSW1hZ2V7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgLy8gaGVpZ2h0OiA0NXZoO1xufVxuLnN1YkNvbnRhaW5lcntcbiAgICBtYXJnaW4tdG9wOiAxMHB4IDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi50ZXh0Q29udHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB3aWR0aDogNDB2dztcbn1cbmltZ3tcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLmxvZ297XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB3aWR0aDogMTAwcHhcbn1cbi5MYW5kaW5nTG9nb3tcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLkxhbmRpbmdMb2dvOmhvdmVyLC5jZW50ZXI6aG92ZXJ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG4uTGFuZGluZ0xvZ286aG92ZXI6YWN0aXZlLC5jZW50ZXI6aG92ZXI6YWN0aXZle1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmNlbnRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDUwdmggKyAxNTBweCk7XG4gICAgbGVmdDogY2FsYyg1MHZ3IC0gNTBweCk7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbn1cbi5jb250ZW50e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi8vIC5pbWFnZUNvbnQ6aG92ZXIgLnNob3dPbmhvdmVye1xuLy8gICAgIC8vIGZpbHRlcjogYnJpZ2h0bmVzcygxMDAlKTtcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7XG4vLyAgICAgdG9wOiA1MCU7XG4vLyAgICAgbWFyZ2luOiAwcHg7XG4vLyAgICAgbGVmdDogNTAlO1xuLy8gICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuLy8gfSIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbjpyb290IHtcbiAgLS1jb2xvcjE6ICM2NWMxNzQ7XG4gIC0tY29sb3IyOiAjRTFCREIyMkU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnAge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbn1cblxuYXBwLW5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLmVyZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5hcHAtbGFuZGluZy1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDUwO1xufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IyKTtcbn1cblxuLmhvbWVJbWFnZSB7XG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XG4gIHdpZHRoOiA0MHZ3O1xuICBib3gtc2hhZG93OiAzNXB4IDM1cHggMHB4IDVweCAjZmZlYWMzO1xufVxuXG4uZW5sYXJnZWQgLmhvbWVJbWFnZSB7XG4gIHRyYW5zaXRpb246IDFzO1xuICB3aWR0aDogNjB2dztcbiAgYm94LXNoYWRvdzogMzVweCAzNXB4IDBweCAxMDAwMHB4ICNmZmVhYzM7XG59XG5cbi5pbWFnZUNvbnQge1xuICBtYXJnaW46IDUwcHggNTBweDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IDFzIGVhc2U7XG59XG5cbi5tYWluUGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnBhZ2VDb250ZW50IHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubWFpbkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluQ29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2FucyBDb25kZW5zZWRcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBjb2xvcjogdmFyKC0tY29sb3IxKTtcbn1cblxuLm1haW5Db250YWluZXIgaDEge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnMgQ29uZGVuc2VkXCIsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgY29sb3I6IHZhcigtLWNvbG9yMSk7XG59XG5cbi5zaG93T25ob3ZlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5zdWJJbWFnZSB7XG4gIHdpZHRoOiAyMHZ3O1xufVxuXG4uc3ViQ29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGV4dENvbnQge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgd2lkdGg6IDQwdnc7XG59XG5cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLkxhbmRpbmdMb2dvIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLkxhbmRpbmdMb2dvOmhvdmVyLCAuY2VudGVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uTGFuZGluZ0xvZ286aG92ZXI6YWN0aXZlLCAuY2VudGVyOmhvdmVyOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwdmggKyAxNTBweCk7XG4gIGxlZnQ6IGNhbGMoNTB2dyAtIDUwcHgpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\AmyWeb\amy-app\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map