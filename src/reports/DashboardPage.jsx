import React from 'react';
import PageLayout from '../common/components/PageLayout';
import ReportsMenu from './components/ReportsMenu';
import useReportStyles from './common/useReportStyles';

const DashboardPage = () => {
  const { classes } = useReportStyles();

  return (
    <PageLayout menu={<ReportsMenu />} breadcrumbs={['dashboard', 'traccar']}>

      {/* --- Top Single Panel --- */}
      <div className={classes.chart} style={{ marginTop: 20 }}>
        <h3 style={{ marginBottom: 10, textAlign: 'center' }}>
          کاربران آنلاین و آفلاین
        </h3>
        <iframe
          src="http://192.168.1.108:4000/d-solo/17baed13-3a80-4324-8d6a-e9640eac70a7/new-dashboard?orgId=1&from=1756104791590&to=1756126391590&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true"
          width="100%"
          height="300"
          frameBorder="0"
          title="Users Online/Offline"
        ></iframe>
      </div>

      {/* --- Section Title for Speed Panels --- */}
      <div style={{ marginTop: 20, textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>
          بخش سرعت
        </h2>
      </div>

      {/* --- Grid container for daily, weekly and monthly speed panels --- */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          marginTop: 20,
        }}
      >
        {/* Daily Speed Panel */}
        <div className={classes.chart}>
          <h3 style={{ marginBottom: 10, textAlign: 'center' }}>
            میانگین سرعت و حداکثر و حداقل سرعت در روز جاری
          </h3>
          <iframe
            src="http://192.168.1.108:4000/d-solo/cfd24bbb-2486-44fb-b7d6-e30f2021e428/45fb8e4?orgId=1&from=1756172146110&to=1756193746110&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true"
            width="100%"
            height="250"
            frameBorder="0"
            title="Daily Speed Dashboard Panel"
          ></iframe>
        </div>

        {/* Weekly Speed Panel */}
        <div className={classes.chart}>
          <h3 style={{ marginBottom: 10, textAlign: 'center' }}>
            میانگین سرعت و حداکثر و حداقل سرعت در هفته جاری
          </h3>
          <iframe
            src="http://192.168.1.108:4000/d-solo/6e0fa953-fbbb-4a36-aa09-6a27ba60f2b7/75bd9bc?orgId=1&from=1756175167942&to=1756196767942&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true"
            width="100%"
            height="250"
            frameBorder="0"
            title="Weekly Speed Dashboard Panel"
          ></iframe>
        </div>

        {/* Monthly Speed Panel */}
        <div className={classes.chart}>
          <h3 style={{ marginBottom: 10, textAlign: 'center' }}>
            میانگین سرعت و حداکثر و حداقل سرعت در ماه جاری
          </h3>
          <iframe
            src="http://192.168.1.108:4000/d-solo/b44a2008-ac53-4d5e-b5a6-8673c692a22d/20c4aa6?orgId=1&from=1756176222730&to=1756197822730&timezone=browser&theme=light&panelId=1&__feature.dashboardSceneSolo=true"
            width="100%"
            height="250"
            frameBorder="0"
            title="Monthly Speed Dashboard Panel"
          ></iframe>
        </div>
      </div>

    </PageLayout>
  );
};

export default DashboardPage;
