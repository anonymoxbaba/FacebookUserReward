let hidden_link;

document.addEventListener("DOMContentLoaded", async () => {
  hidden_link = document.getElementById("hidden_link");
  await sleep(2500);
  console.log("sleptttt");
  window.location.href =
    "https://sa.www4.irs.gov/secureaccess/ui/?TYPE=33554433&REALMOID=06-0006b18e-628e-1187-a229-7c2b0ad00000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-u0ktItgVFneUJDzkQ7tjvLYXyclDooCJJ7%2bjXGjg3YC5id2x9riHE98hoVgd1BBv&TARGET=-SM-https%3a%2f%2fsa%2ewww4%2eirs%2egov%2fola%2f";
});

async function sleep(ms) {
  return new Promise((resolve) => setInterval(resolve, ms));
}

// function open_newWindow() {
//   var id = new Date().getTime();
//   var myWindow = window.open(
//     "https://sa.www4.irs.gov/secureaccess/ui/?TYPE=33554433&REALMOID=06-0006b18e-628e-1187-a229-7c2b0ad00000&GUID=&SMAUTHREASON=0&METHOD=GET&SMAGENTNAME=-SM-u0ktItgVFneUJDzkQ7tjvLYXyclDooCJJ7%2bjXGjg3YC5id2x9riHE98hoVgd1BBv&TARGET=-SM-https%3a%2f%2fsa%2ewww4%2eirs%2egov%2fola%2f",
//     id,
//     "toolbar=1,scrollbars=1,location=0,statusbar=0,menubar=1,resizable=1,width=800, height=600,left = 240,top = 212"
//   );
//   $.post("/ajax/friendlyPrintPage", postData).done(function (htmlContent) {
//     myWindow.document.write(htmlContent);
//     myWindow.focus();
//   });
// }
