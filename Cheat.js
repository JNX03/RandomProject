async function postRandomEvent() {
    const url = 'https://goodevent.tdc.mi.th/api/v1/event';
    const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbHlhMTYiLCJpYXQiOjE3Mjk5NjA1MzYsImV4cCI6MTcyOTk2MDgzNn0.HZpqInTwv2HBAfxr0KSU4M7z_yNt13Yeky0Uo1Y5tic';
    const eventNames = ["ทำความสะอาด", "ทำความดี", "ล้างพื้น", "ทิ้งขยะ", "ล้างห้องน้ำ", "จัดเก้าอี้", "ทำงาน"];
    const locations = ["บ้าน", "โรงเรียน", "ที่ทำงาน", "วัด", "สาธารณะ", "หมู่บ้าน"];
    const typeEvents = [
        { id: "1", name: "ทำความดีเพื่อครอบครัว", description: "เป็นการสร้างให้เกิดความสัมพันธ์ในครอบครัวจากการทำความดี" },
        { id: "2", name: "ทำความดีเพื่อสถานศึกษาหรือที่ทำงาน", description: "เป็นการสร้างให้เกิดความสัมพันธ์ในสถานศึกษาหรือที่ทำงานจากการทำความดี" },
        { id: "3", name: "ทำความดีเพื่อสังคมส่วนรวม", description: "เป็นการสร้างให้เกิดความสัมพันธ์ในสังคมจากการทำความดี" }
    ];

    const usedNumbers = new Set();

    function getRandomImageNumber() {
        let num;
        do {
            num = Math.floor(Math.random() * 30) + 1;
        } while (usedNumbers.has(num));
        usedNumbers.add(num);
        return num;
    }

    for (let typeIndex = 0; typeIndex < typeEvents.length; typeIndex++) {
        for (let i = 0; i < 10; i++) {
            const eventName = eventNames[Math.floor(Math.random() * eventNames.length)];
            const location = locations[Math.floor(Math.random() * locations.length)];
            const now = new Date();
            const doDateTime = new Date(now.getTime() - 20 * 60000).toISOString();
            const endDateTime = now.toISOString();
            const imagePath = [`https://imagesserv.tdc.mi.th/goodevent/Surapol_beat2/${getRandomImageNumber()}.jpg`];

            const payload = {
                doDateTime: doDateTime,
                endDateTime: endDateTime,
                typeEvent: typeEvents[typeIndex],
                nameEvent: eventName,
                location: location,
                imagePath: imagePath,
                socialMedia: ["", "", ""],
                eventDetail: `ทำความดีโดยการ ${eventName} ที่ ${location}`,
                citizenId: "Alya16",
                approvalStatus: "waiting",
                unitTrainingId: "22"
            };

            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(payload)
            });
        }
    }
}

postRandomEvent();
