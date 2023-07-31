const dayjs = require("dayjs");

const day = (date) => {
  const agora = dayjs();
  const nascimento = dayjs(date);
  console.log(`A idade da pessoa é de ${agora.diff(nascimento, "year")}!`);

  let proximoAniv = nascimento.year(agora.year());
  if (proximoAniv.isBefore(agora)) {
    proximoAniv = proximoAniv.add(1, "year");
    console.log(
      `O aniverário da pessoa é em ${proximoAniv.format("YYYY-MM-DD")}!`
    );
  } else {
    console.log(
      `O aniverário da pessoa foi em ${proximoAniv.format("YYYY-MM-DD")}!`
    );
  }

  const diasFaltando = proximoAniv.diff(agora, "day");
  console.log(`O aniverário da pessoa é daqui a ${diasFaltando} dias!`);
};

day("2002-04-07");
