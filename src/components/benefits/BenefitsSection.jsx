import React from 'react';
import './BenefitsSection.scss';
// MUI Icons
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';

const featureData = [
  {
    id: 1,
    Icon: TimerOutlinedIcon,
    text: 'Easy and quick solution to your queries in most cases.',
    variant: 'primary',
  },
  {
    id: 2,
    Icon: TouchAppOutlinedIcon,
    text: 'Intuitive and easy to use for most scenarios.',
    variant: 'alt',
  },
  {
    id: 3,
    Icon: DirectionsRunOutlinedIcon,
    text: 'Won\'t slow down or interrupt your workflow.',
    variant: 'primary',
  },
  {
    id: 4,
    Icon: ScienceOutlinedIcon,
    text: 'Deep analysis of your investment behaviour and patterns.',
    variant: 'alt',
  },
];

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-wrapper">
        {featureData.map(({ id, Icon, text, variant }) => (
          <div key={id} className="benefit-item">
            <div className={`hexagon ${variant}`}>
              <Icon className="hex-icon" />
            </div>
            <p className="benefit-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
