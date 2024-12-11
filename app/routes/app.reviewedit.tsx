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
  } from '@shopify/polaris';
  import {useState, useCallback} from 'react';
  import {ChevronLeftIcon} from '@shopify/polaris-icons';
  import {Icon} from '@shopify/polaris';
import thumb from "./assets/reunion.png";
import keep from "./assets/Subtract.png";
import hotspot from "./assets/Vector.png";
import "./assets/reviewwdit.css"
  export default  function Reviewedit() {
    const [isFullscreen, setFullscreen] = useState(true);
    const [expanded, setExpanded] = useState(true);
    const [selected, setSelected] = useState(0);
    const handleActionClick = useCallback(() => {
      setFullscreen(false);
    }, []);
    const handleTabChange = useCallback(
        (selectedTabIndex: number) => setSelected(selectedTabIndex),
        [],
      );
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
          <div style={{marginLeft: '1rem', flexGrow: 1}}>
            <Text variant="headingLg" as="p">
            Product Reviews
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
    const tabs = [
        {
          id: 'all-customers-1',
          content: '⭐️ Reviews',
          accessibilityLabel: 'All customers',
          panelID: 'all-customers-content-1',
        },
        {
          id: 'accepts-marketing-1',
          content: '📩 Request Reviews',
          panelID: 'accepts-marketing-content-1',
        },
      ];
  
    return (
      <div style={{height: '250px', width: '100%'}}>
        {isFullscreen && fullscreenBarMarkup}
        <div style={{padding: '1rem'}}>
          {!isFullscreen && (
            <Button onClick={() => setFullscreen(true)}>Go Fullscreen</Button>
          )}
          <Page>
            <Layout>
                <Layout.Section>
                    <BlockStack>
                    <Grid>
                                <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
                                <LegacyCard sectioned>
                                    <div className='icon_child'>
                                    <div className="icon_feature">
                                    <img src={hotspot}/>
                                    </div>
                                    <div>
                                        <p>Reviews Collected</p>
                                        <span>280</span>
                                    </div>
                                    </div>
                                </LegacyCard>
                                </Grid.Cell>
                                <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
                                <LegacyCard sectioned>
                                <div className='icon_child'>
                                    <div className="icon_feature">
                                    <img src={thumb}/>
                                    </div>
                                    <div>
                                        <p>Average Rating</p>
                                        <span>4.7</span>
                                    </div>
                                    </div>
                                </LegacyCard>
                                </Grid.Cell>
                            
                            <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
                                <LegacyCard sectioned>
                                <div className='icon_child Click_rate'>
                                    <div className="icon_feature">
                                    <img src={keep}/>
                                    </div>
                                    <div>
                                        <p>Add Review Button
                                        Click-Through Rate</p>
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
          <Page>
          <Layout>
                    <Layout.Section>
                        <BlockStack gap="300">
                        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                            <LegacyCard.Section title={tabs[selected].content}>
                                <p>Tab {selected} selected</p>
                            </LegacyCard.Section>
                            </Tabs>
                        </BlockStack>
                    </Layout.Section>
                </Layout>
          </Page>
        </div>
      </div>
    );
  }