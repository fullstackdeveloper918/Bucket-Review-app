import { useState, useCallback } from 'react';
import cart from "./assets/cart.png";
import keep from "./assets/Subtract.png";
import tag from "./assets/tag.png";
import "./assets/reviewwdit.css";

import {
    Badge,
    ButtonGroup,
    FullscreenBar,
    Button,
    Text,
    Page,
    Grid, LegacyCard,
    Layout,
    BlockStack,
    Tabs,
    Box,
    Card,
    Form, FormLayout, Checkbox, TextField,
  } from '@shopify/polaris';
import { ChevronLeftIcon } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';
  
export default function Headernew() {
  const [isFullscreen, setFullscreen] = useState(true);

  const [expanded, setExpanded] = useState(true);
  const handleActionClick = useCallback(() => {
    setFullscreen(false);
  }, []);
    const fullscreenBarMarkup = (
        <Page onAction={handleActionClick}>
          <div
            style={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: '1rem',
              paddingRight: '1rem',
            }}
          >
            <Badge tone="active">
              <Icon
                source={ChevronLeftIcon}
                tone="base"
              />
            </Badge>
            <div style={{ marginLeft: '1rem', flexGrow: 1 }}>
              <Text variant="headingLg" as="p">
              Product Bundles
              </Text>
            </div>
            <ButtonGroup>
              <div className='activebtn --p-color-avatar-two-bg-fill'>
                <Button
                  bg-surface="--p-color-avatar-two-bg-fill"
                  fullWidth
                  textAlign="left"
                  disclosure={expanded ? 'down' : 'up'}
                  onClick={() => setExpanded(!expanded)}
                  size="large"
    
                >
                  {expanded ? 'Active' : 'Draft'}
                </Button>
              </div>
            </ButtonGroup>
    
          </div>
        </Page>
      );

    return (
        <>
            <div style={{ height: '250px', width: '100%' }}>
            {isFullscreen && fullscreenBarMarkup}
            <div style={{ padding: '1rem' }}>
                {!isFullscreen && (
                <Button onClick={() => setFullscreen(true)}>Go Fullscreen</Button>
                )}
          <Page>
          <Layout>
            <Layout.Section>
              <BlockStack>
                <Grid>
                  <Grid.Cell columnSpan={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                    <LegacyCard sectioned>
                      <div className='icon_child'>
                        <div className="icon_feature">
                          <img src={cart} />
                        </div>
                        <div>
                          <p>Revenue</p>
                          <span>5,423$</span>
                        </div>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                    <LegacyCard sectioned>
                      <div className='icon_child'>
                        <div className="icon_feature">
                          <img src={tag} />
                        </div>
                        <div>
                          <p>Average Order Value</p>
                          <span>199$</span>
                        </div>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>

                  <Grid.Cell columnSpan={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                    <LegacyCard sectioned>
                      <div className='icon_child Click_rate'>
                        <div className="icon_feature">
                          <img src={keep} />
                        </div>
                        <div>
                          <p>Click-Through Rate</p>
                          <span>5%</span>
                        </div>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>
                </Grid>
              </BlockStack>
            </Layout.Section>


          </Layout>
        </Page>
        </div>
        </div>
        </>
    );
}
