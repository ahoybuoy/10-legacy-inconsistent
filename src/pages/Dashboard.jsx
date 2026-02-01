import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import all the inconsistent components - this is the chaos
import Button from '../components/Button';
import { Btn } from '../components/Btn';
import ButtonComponent from '../components/ButtonComponent';
import Card from '../components/Card';
import { CardNew, CardHeader, CardTitle, CardBody, CardFooter } from '../components/CardNew';
import Modal from '../components/Modal';
import ModalWrapper from '../components/ModalWrapper';
import Input from '../components/Input';
import { InputField } from '../components/InputField';

// Import style utilities
import { colors, spacing, shadows, radii } from '../utils/styles';
import '../styles/global.scss';

/**
 * Dashboard - A page that demonstrates the chaos of mixed patterns
 * Uses class component with various styling approaches mixed together
 */
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLegacyModalOpen: false,
      isModernModalOpen: false,
      formData: {
        email: '',
        password: '',
      },
      stats: [
        { label: 'Total Users', value: '12,345', change: '+12%' },
        { label: 'Revenue', value: '$45,678', change: '+8%' },
        { label: 'Orders', value: '1,234', change: '-3%' },
        { label: 'Conversion', value: '3.2%', change: '+0.5%' },
      ],
    };
  }

  // Deprecated lifecycle
  componentWillMount() {
    console.log('Dashboard mounting...');
  }

  handleInputChange = (field) => (e) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [field]: e.target.value,
      },
    });
  };

  openLegacyModal = () => this.setState({ isLegacyModalOpen: true });
  closeLegacyModal = () => this.setState({ isLegacyModalOpen: false });
  openModernModal = () => this.setState({ isModernModalOpen: true });
  closeModernModal = () => this.setState({ isModernModalOpen: false });

  render() {
    const { isLegacyModalOpen, isModernModalOpen, stats, formData } = this.state;

    return (
      <div
        style={{
          // Inline styles with hardcoded values
          minHeight: '100vh',
          backgroundColor: '#F3F4F6',
          padding: '24px',
        }}
      >
        {/* Header with mixed button types */}
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: 700,
              color: '#111827',
            }}
          >
            Dashboard
          </h1>

          <div style={{ display: 'flex', gap: '12px' }}>
            {/* Legacy Button */}
            <Button variant="ghost" size="medium">
              Settings
            </Button>

            {/* Modern Btn */}
            <Btn variant="outline" size="md">
              Export
            </Btn>

            {/* ButtonComponent */}
            <ButtonComponent
              label="New Item"
              variant="accent"
              size="regular"
            />
          </div>
        </header>

        {/* Stats section with legacy Card */}
        <section style={{ marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '16px',
            }}
          >
            Overview
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
            }}
          >
            {stats.map((stat, index) => (
              <Card key={index} elevation="low">
                <div style={{ textAlign: 'center' }}>
                  <p
                    style={{
                      margin: '0 0 8px',
                      fontSize: '14px',
                      color: '#6B7280',
                    }}
                  >
                    {stat.label}
                  </p>
                  <p
                    style={{
                      margin: '0 0 4px',
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#111827',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '13px',
                      color: stat.change.startsWith('+') ? '#10B981' : '#EF4444',
                    }}
                  >
                    {stat.change}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Form section mixing Input and InputField */}
        <section style={{ marginBottom: '32px' }}>
          <CardNew variant="elevated" padding="lg">
            <CardHeader>
              <CardTitle>User Settings</CardTitle>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {/* Legacy Input */}
                <Input
                  label="Email (Legacy)"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={this.handleInputChange('email')}
                />

                {/* Modern InputField */}
                <InputField
                  label="Email (Modern)"
                  type="email"
                  placeholder="Enter your email"
                  hint="We'll never share your email"
                />

                {/* Different styling approaches visible side by side */}
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  size="lg"
                />

                <InputField
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  size="lg"
                  state="error"
                  message="Password must be at least 8 characters"
                />
              </div>
            </CardBody>
            <CardFooter>
              {/* Mix of button types in same context */}
              <Button variant="ghost" size="medium">
                Cancel
              </Button>
              <Btn variant="primary" size="md">
                Save Changes
              </Btn>
            </CardFooter>
          </CardNew>
        </section>

        {/* Modal comparison section */}
        <section>
          <h2
            style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#374151',
              marginBottom: '16px',
            }}
          >
            Modal Examples
          </h2>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Button variant="primary" size="medium" onClick={this.openLegacyModal}>
              Open Legacy Modal
            </Button>

            <Btn variant="primary" size="md" onClick={this.openModernModal}>
              Open Modern Modal
            </Btn>
          </div>
        </section>

        {/* Legacy Modal */}
        <Modal
          isOpen={isLegacyModalOpen}
          onClose={this.closeLegacyModal}
          title="Legacy Modal"
          size="md"
          footer={
            <>
              <Button variant="ghost" size="medium" onClick={this.closeLegacyModal}>
                Cancel
              </Button>
              <Button variant="primary" size="medium">
                Confirm
              </Button>
            </>
          }
        >
          <p style={{ color: '#4B5563' }}>
            This is the legacy Modal component using styled-components with a class component.
            Notice the different styling compared to the modern version.
          </p>
          <Input
            label="Sample Input"
            placeholder="Type something..."
            style={{ marginTop: '16px' }}
          />
        </Modal>

        {/* Modern ModalWrapper */}
        <ModalWrapper
          open={isModernModalOpen}
          onDismiss={this.closeModernModal}
          title="Modern Modal"
          description="This is the modern ModalWrapper using CSS Modules"
          size="medium"
          footer={
            <>
              <Btn variant="secondary" size="md" onClick={this.closeModernModal}>
                Cancel
              </Btn>
              <Btn variant="primary" size="md">
                Confirm
              </Btn>
            </>
          }
        >
          <p style={{ color: '#475569' }}>
            This modal uses CSS Modules for styling and a different API pattern.
            Compare the styling differences between the two modals.
          </p>
          <div style={{ marginTop: '16px' }}>
            <InputField
              label="Sample Input"
              placeholder="Type something..."
            />
          </div>
        </ModalWrapper>
      </div>
    );
  }
}

Dashboard.propTypes = {
  // No props needed for this example
};

export default Dashboard;
