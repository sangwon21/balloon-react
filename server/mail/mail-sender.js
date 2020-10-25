require("dotenv").config();

var nodemailer = require("nodemailer");
var mailTemplateKo = require("./mail-template-ko")();
var mailTemplateJa = require("./mail-template-ja")();

var transporter = nodemailer.createTransport({
  service: "gmail",
  prot: 587,
  host: "smtp.gmlail.com",
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

var mailOptions = {
  ko: {
    from: "칭찬합시다 <balloon.mail.test@gmail.com>",
    to: "balloon.mail.test@gmail.com",
    subject: "[칭찬합시다] 방금 누군가가 당신에게 칭찬 편지를 보냈습니다.",
    html: mailTemplateKo,
  },
  ja: {
    from: "ほめましょう <balloon.mail.test@gmail.com>",
    to: "balloon.mail.test@gmail.com",
    subject: "[ほめましょう] 先ほど誰かがあなたにほめ手紙を送りました。",
    html: mailTemplateJa,
  },
};

/*
칭찬합시다
ほめましょう

방금전에 누군가가 당신에게 칭찬 편지를 보냈습니다.
先ほど誰かがあなたにほめ手紙を送りました。

궁금하시더라도 며칠만 기다려주세요!
気にしても数日だけお待ちください！

도착한 편지는 다음달 1일 [칭찬함]에 공개됩니다 ^^
到着した手紙は、来月1日[ほめメッセージ]に公開されます ^^

나도 칭찬하러 가기!
私ほめに来に行く

매월 1일, 생각지도 않았던 칭찬 메시지에 기분좋은 하루가 되었으면 합니다.
毎月1日、ほめメッセージに気持ちの良い一日になればします。
毎月1日は、思いがけないほめられメッセージでハッピーな一日をお過ごしいただければと思います。
*/

function sendEmail(receiverEmail, receiverBranch) {
  var options = null;
  if (receiverBranch === "일본법인") {
    options = mailOptions.ja;
  } else {
    options = mailOptions.ko;
  }
  options.to = receiverEmail;

  transporter.sendMail(options, function (error, info) {
    if (error) {
      return console.log("Mailer error", error);
    }
    console.log("Mail sent: " + info.response);
  });
}

module.exports = {
  sendEmail: sendEmail,
};
