function fetchComplaintData() {
  fetch(`./data/complaint.csv`)
    .then(resp => resp.text())
    .then(data => {
      const complaintData = Papa.parse(data, { header: true });
      window.complaintData = complaintData;
      console.log(complaintData);
    });
}

function fetchInfoData() {
  fetch(`./data/information.csv`)
    .then(resp => resp.text())
    .then(data => {
      const infoData = Papa.parse(data, { header: true });
      window.infoData = infoData;
      //console.log(infoData);
    });
}

function fetchQOLData() {
  fetch(`./data/lifequality.csv`)
    .then(resp => resp.text())
    .then(data => {
      const qolData = Papa.parse(data, { header: true });
      window.qolData = qolData;
      //console.log(qolData);
    });
}

function fetchMiscData() {
  fetch(`./data/miscellaneous.csv`)
    .then(resp => resp.text())
    .then(data => {
      const miscData = Papa.parse(data, { header: true });
      window.miscData = miscData;
      //console.log(miscData);
    });
}

function fetchStreetsData() {
  fetch(`./data/streets.csv`)
    .then(resp => resp.text())
    .then(data => {
      const streetsData = Papa.parse(data, { header: true });
      window.streetsData = streetsData;
      //console.log(streetsData);
    });
}


function fetchAllData() {
  fetchComplaintData();
  fetchInfoData();
  fetchQOLData();
  fetchMiscData();
  fetchStreetsData();
};



export {
  fetchAllData,
};

