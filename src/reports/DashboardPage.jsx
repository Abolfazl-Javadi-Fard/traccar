import React from 'react';
import PageLayout from '../common/components/PageLayout';
import ReportsMenu from './components/ReportsMenu';
import useReportStyles from './common/useReportStyles';

const DashboardPage = () => {
  const { classes } = useReportStyles();

  const cardStyle = {
    position: 'relative', // برای نمایش لایو دات
    background: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    padding: '20px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    animation: 'flipIn 1s ease forwards',
    margin: 0,
  };

  const liveDotStyle = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#ff4d4f',
    boxShadow: '0 0 6px rgba(255,77,79,0.6)',
    animation: 'pulse 1.5s infinite',
  };

  const liveTextStyle = {
    position: 'absolute',
    top: '14px',
    right: '35px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#ff4d4f',
    animation: 'pulseText 1.5s infinite',
  };

  const cardTitleStyle = {
    marginBottom: '15px',
    textAlign: 'center',
    color: '#333',
    fontWeight: '600',
    fontSize: '18px',
    padding: '5px 0',
    borderRadius: '8px',
    background: '#f9f9f9',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  };

  const descriptionStyle = {
    textAlign: "center",
    marginTop: "10px",
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.6",
    padding: "10px 15px",
    borderRadius: "8px",
    background: "#fafafa",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  };

  const cardsData = [
    {
      title: "کل مسافت طی شده در روز جاری توسط خودروهای گروه",
      // emoji: "🚙",
      iframeSrc: "http://5.39.35.230:4000/d-solo/1e2ee290-8813-42a4-b394-a04a2fcae051/dc45aa3?orgId=1&from=1756253424496&to=1756275024496&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true",
      // description: "این نمودار نشان‌دهنده میزان مسافت طی شده توسط خودروهای گروه در روز جاری است و به شما امکان می‌دهد میزان استفاده از مسافت مجاز را نسبت به مقدار تعیین‌شده به‌صورت دقیق و شفاف بررسی نمایید."
    },
        {
      title: "کل مسافت طی شده در روز گذشته توسط خودروهای گروه",
      // emoji: "🚗",
      iframeSrc: "http://5.39.35.230:4000/d-solo/da127dba-790c-47ff-a3fc-11aebc8b4b97/new-dashboard?orgId=1&from=1756271785483&to=1756293385483&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true",
      // description: "این نمودار نشان‌دهنده میزان مسافت طی شده توسط خودروهای گروه در بازه زمانی ماهانه است و به شما امکان می‌دهد میزان استفاده از مسافت مجاز را نسبت به مقدار تعیین‌شده به‌صورت دقیق و شفاف بررسی نمایید."
    },
        {
      title: "کل مسافت طی شده در هفته جاری توسط خودروهای گروه",
      // emoji: "🚗",
      iframeSrc: "http://5.39.35.230:4000/d-solo/00f9f616-b4a9-4b4d-be6a-c442af4cca38/d987-d981-d8aa-d987-d8ac-d8a7-d8b1-db8c?orgId=1&from=1756257114490&to=1756278714490&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true",
      // description: "این نمودار نشان‌دهنده میزان مسافت طی شده توسط خودروهای گروه در بازه زمانی هفتگی است و به شما امکان می‌دهد میزان استفاده از مسافت مجاز را نسبت به مقدار تعیین‌شده به‌صورت دقیق و شفاف بررسی نمایید."
    },
    {
      title: "کل مسافت طی شده در ماه جاری توسط خودروهای گروه",
      // emoji: "🚗",
      iframeSrc: "http://5.39.35.230:4000/d-solo/63e42578-cbc6-4ed0-9af5-7fbcf15eca07/f3615f8?orgId=1&from=1756250070745&to=1756271670745&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true",
      // description: "این نمودار نشان‌دهنده میزان مسافت طی شده توسط خودروهای گروه در بازه زمانی ماهانه است و به شما امکان می‌دهد میزان استفاده از مسافت مجاز را نسبت به مقدار تعیین‌شده به‌صورت دقیق و شفاف بررسی نمایید."
    },
   {
      title: "میانگین سرعت گروه در روز جاری",
      // emoji: "🏁",
      iframeSrc: "http://5.39.35.230:4000/d-solo/47022f42-09ca-45e2-800a-5e468f71e1cd/fea9c26?orgId=1&from=1756269446866&to=1756291046866&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true",
      // description: "این نمودار میانگین سرعت خودروهای گروه را در روز جاری نمایش می‌دهد و به شما کمک می‌کند عملکرد رانندگان و گروه را ارزیابی کنید."
    },
       {
      title: "میانگین سرعت گروه در روز گذشته",
      // emoji: "🏁",
      iframeSrc: "http://5.39.35.230:4000/d-solo/288f43f0-2e0d-4035-b3d1-7fea53733f6d/096e73b?orgId=1&from=1756272217884&to=1756293817884&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true",
      // description: "این نمودار میانگین سرعت خودروهای گروه را در روز جاری نمایش می‌دهد و به شما کمک می‌کند عملکرد رانندگان و گروه را ارزیابی کنید."
    },
    {
      title: "میانگین سرعت گروه در هفته جاری",
      // emoji: "🏁",
      iframeSrc: "http://5.39.35.230:4000/d-solo/aaa4c09f-05d9-404b-939d-6b64c8cbc26e/35add33?orgId=1&from=1756268647349&to=1756290247349&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true",
      // description: "این نمودار میانگین سرعت خودروهای گروه را در هفته جاری نمایش می‌دهد و به شما کمک می‌کند عملکرد رانندگان و گروه را ارزیابی کنید."
    },
    {
      title: "میانگین سرعت متوسط گروه در ماه جاری",
      // emoji: "🏎️",
      iframeSrc: "http://5.39.35.230:4000/d-solo/3e2bb9cd-0af6-4534-a70d-e61ab937cf0a/e0ab856?orgId=1&from=1756261879076&to=1756283479076&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true",
      // description: "این نمودار میانگین سرعت خودروهای گروه را در ماه جاری نمایش می‌دهد و به شما کمک می‌کند عملکرد رانندگان و گروه را ارزیابی کنید."
    },

 
  ];

  return (
    <PageLayout menu={<ReportsMenu />} breadcrumbs={['dashboard', 'traccar']}>
      <style>
        {`
          @keyframes flipIn {
            0% { transform: rotateY(90deg); opacity: 0; }
            60% { transform: rotateY(-10deg); opacity: 1; }
            80% { transform: rotateY(5deg); }
            100% { transform: rotateY(0deg); }
          }
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.4); opacity: 0.5; }
            100% { transform: scale(1); opacity: 0.9; }
          }
          @keyframes pulseText {
            0% { opacity: 0.9; }
            50% { opacity: 0.5; }
            100% { opacity: 0.9; }
          }
        `}
      </style>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 10,
          marginTop: 10,
        }}
      >
        {cardsData.map((card, index) => (
          <div key={index} style={cardStyle}>
            <div style={liveDotStyle}></div>
            <div style={liveTextStyle}>زنده</div>
            <h3 style={{ ...cardTitleStyle, fontSize: "14px" }}>
              {card.title}
            </h3>
            <iframe
              src={card.iframeSrc}
              width="100%"
              height="180"
              frameBorder="0"
              title={card.title}
              style={{ borderRadius: "8px" }}
            ></iframe>
            <p style={descriptionStyle}>
              <span style={{ fontSize: "22px" }}>{card.emoji}</span> {card.description}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
