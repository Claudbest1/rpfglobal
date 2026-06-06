export type MinistryLeader = {
	name: string;
	role?: string;
};

export type MinistryDepartment = {
	name: string;
	description: string;
};

export type Ministry = {
	id: string;
	name: string;
	intro?: string[];
	paragraphs?: string[];
	vision?: string;
	mission?: string;
	purpose?: string;
	purposes?: string[];
	responsibilities?: string[];
	departments?: MinistryDepartment[];
	meetingDays?: string[];
	meetings?: string;
	leaders?: MinistryLeader[];
	contact?: string;
	scripture?: string;
	note?: string;
};

export const ministriesIntro =
	"About Ministries in Royal Priesthood Family.";

export const ministries: Ministry[] = [
	{
		id: "ushering",
		name: "Ushering",
		intro: [
			"The Ushering Ministry of the Royal Priesthood Family Ministry plays a vital role in creating a welcoming, orderly, and spiritually conducive atmosphere for worship. Ushers are often the first point of contact for members and visitors, and their conduct significantly influences the worship experience.",
			"The vision of the Ushering Ministry is to serve God and His people with humility, order, and excellence, reflecting the love of Christ through hospitality and discipline.",
		],
		purposes: [
			"Serving as instruments of order and reverence during worship services.",
			"Creating a warm and welcoming environment for members and guests.",
			"Supporting the smooth flow of church services and programs.",
		],
		scripture: "Let all things be done decently and in order. — 1 Corinthians 14:40",
		leaders: [{ name: "Mrs. Tijesunimi Odeyemi", role: "Ministry Head" }],
		contact: "08163699606",
	},
	{
		id: "media",
		name: "Media Ministry",
		paragraphs: [
			"The Media Ministry serves as the communication and digital outreach arm of the church, dedicated to spreading the Gospel and supporting the vision of the ministry through various media platforms. Since the inception of the ministry in February 2018, the Media Ministry has played a vital role in documenting, preserving, and broadcasting the work of God within the church and beyond.",
			"Our mission is to communicate the message of Christ with excellence, creativity, and integrity while ensuring that every service, event, and ministry activity reaches both our local congregation and a global audience. Through photography, videography, graphic design, live streaming, social media management, audio-visual production, and digital communications, we create meaningful connections that inspire faith and encourage spiritual growth.",
			"The Media Ministry is committed to leveraging modern technology as a tool for evangelism, discipleship, and kingdom advancement. We strive to ensure that every message, testimony, and ministry moment is captured and shared in a way that glorifies God and impacts lives.",
			"As a ministry that has grown alongside the church since February 2018, we remain passionate about telling God's story, preserving the history of the ministry, and extending the reach of the Gospel to people across communities and nations.",
		],
		responsibilities: [
			"Live streaming of church services and events",
			"Photography and videography coverage",
			"Graphic design and creative content production",
			"Social media management and digital engagement",
			"Audio and visual support during services",
			"Website and digital platform management",
			"Documentation and archiving of ministry activities",
			"Promotion of church programs and outreach initiatives",
			"Supporting evangelism through digital media",
		],
		vision:
			"To use media and technology as instruments for advancing the Kingdom of God, transforming lives, and amplifying the message of Jesus Christ to the world.",
		mission:
			"To communicate the Gospel with excellence, creativity, and integrity while supporting the church's vision through innovative media and digital outreach.",
		meetings: "We meet for prayers every Fridays 8pm – 9pm",
		leaders: [{ name: "Pastor Claudius Odeyemi", role: "Ministry Head" }],
	},
	{
		id: "teenage",
		name: "Royal Priesthood Family Teenage Ministry",
		vision:
			"Raising a generation of bold teenagers who rule as kings and serve as priests in their schools, homes, and world through the Word and prayer.",
		purpose:
			"To disciple teenagers to know God deeply, cultivate Godly character, discover their identity in Christ, and influence their generation as confident kings and passionate priests.",
		mission:
			"We equip teenagers to reign as kings and minister as priests by teaching the Word, building a culture of prayer, and creating a family where every teen belongs, grows, and leads.",
		meetings: "Sunday School on Sunday",
		leaders: [{ name: "Mrs. Charity Aderibigbe" }],
	},
	{
		id: "music",
		name: "Music Ministry",
		intro: [
			"The Music Ministry is a ministry in Royal Priesthood Family dedicated to overseeing musicals for the Church.",
			"The Ministry has two departments that form the Ministry.",
		],
		departments: [
			{
				name: "Worship Team",
				description:
					"The worship team is the unit part of the Ministry that lead worship and praises during Church meetings and organizes worship and praise meetings as led by the Holy Spirit.",
			},
			{
				name: "Choir",
				description:
					"This unit conducts choral activities for the Church.",
			},
		],
		meetings: "November Uninterrupted Worship",
		leaders: [{ name: "Bro. Wale Adegboyega", role: "Leader" }],
	},
	{
		id: "prayer",
		name: "Prayer Ministry",
		intro: [
			"The Prayer Ministry consists of two arms — the Prayer Arm and the Intercessory Arm.",
		],
		meetingDays: [
			"Holding both Pre-service and Post-service prayer meetings weekly on Wednesdays to intercede for the ministers and participants, so that the Word of God can find full expression.",
			"Weekly vigils at the church premises held on Wednesdays from 12am.",
			"Post-service prayers held after every Sunday service to intercede for the Set Man and the Church at large.",
			"Coordinating the daily 8 hours prayer watches.",
			"Coordinating special intercessory prayers for our Special meetings which include IBC, Prayer Convocation, Apostolic Invasion.",
		],
		leaders: [
			{ name: "Bro Joseph Adeleke", role: "Leader of Intercessory Arm" },
			{ name: "Pastor Samuel Oluremi", role: "Leader of Prayer Arm" },
			{ name: "Pastor Faith Akintola", role: "Head of Prayer Ministry" },
		],
	},
	{
		id: "drama",
		name: "Drama Ministry",
		paragraphs: [
			"Drama ministry is a ministry under Royal Priesthood Family which is dedicated towards using organized actions to bring forth the message of the LORD to the church as prompted by the Spirit of GOD. Fully submitted under the leadership of the office of the director of ministry.",
		],
		note: "The church has not officially announced the leader of the ministry yet but for now the activities are being coordinated by Adeleye Emmanuel.",
		leaders: [{ name: "Adeleye Emmanuel", role: "Coordinator" }],
	},
];

export const ministryAccents = [
	"border-l-rpf-blue",
	"border-l-rpf-purple",
	"border-l-rpf-orange",
	"border-l-rpf-teal",
	"border-l-rpf-rose",
	"border-l-rpf-blue",
] as const;
