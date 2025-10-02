 const ramzanDate = new Date("Feb 17, 2026 00:00:00");
    const today = new Date();
    const diff = ramzanDate - today;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);

    document.getElementById("result").innerHTML = `
      📅 Today Date: ${today.toDateString()} <br>
      🌙 Ramzan start: ${ramzanDate.toDateString()} <br><br>
      ⏳ Ramzan coming soon <b>${days}</b> Days (<b>${weeks}</b> Weeks / <b>${months}</b> Months) Lefts. `;