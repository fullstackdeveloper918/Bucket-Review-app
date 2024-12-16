import React, { useState } from 'react';
import Header from "./app.header";
import "./assets/bundle.css";
import { Icon } from '@shopify/polaris';

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
import {
    DeleteIcon
} from '@shopify/polaris-icons';
import {
    DuplicateIcon
} from '@shopify/polaris-icons';
import {
    EditIcon
} from '@shopify/polaris-icons';
import cart from "./assets/cart.png";
import keep from "./assets/Subtract.png";
import tag from "./assets/tag.png";

export default function Bundle() {
    const [bundles, setBundles] = useState([]);

    const handleCreateBundle = () => {
        // Add a new bundle to the list
        setBundles([
            ...bundles,
            {
                id: bundles.length + 1,
                name: `Example Bundle ${bundles.length + 1}`,
                revenue: '5,423$',
                avgOrderValue: '199$',
                clickThroughRate: '5%',
            }
        ]);
    };

    return (
        <>
            <Header />
            <Page>
                <Layout>
                    <Layout.Section>
                        <BlockStack>
                            <div className="bundle_subheading">
                                <Text variant="headingLg" as="p">
                                    All Bundles
                                </Text>
                                <Button onClick={handleCreateBundle}>Create Bundle</Button>
                            </div>
                        </BlockStack>
                    </Layout.Section>
                </Layout>
            </Page>
            
            <Page>
                <Layout>
                    <Layout.Section>
                        <BlockStack>
                            {bundles.map(bundle => (
                                <LegacyCard key={bundle.id}>
                                    <div className="switch" style={{ display: 'flex' }}>
                                       
                                        <div className="mainproduct_edit_delete">
                                            <div className="product_edit_toggle">
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round slider_csrt"></span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="bundle_heading">
                                            <Text variant="headingLg" as="p">
                                                {bundle.name}
                                            </Text>
                                        </div>
                                        <div className="bundle_options_edits" style={{ display: 'flex' }}>
                                            <Icon
                                                source={DeleteIcon}
                                                tone="base"
                                            />
                                            <Icon
                                                source={DuplicateIcon}
                                                tone="base"
                                            />
                                            <Icon
                                                source={EditIcon}
                                                tone="base"
                                            />
                                        </div>
                                    </div>
                                  
                                    <div className="bundle_block">
                                        <BlockStack>
                                            <Grid>
                                                <Grid.Cell columnSpan={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3}}>
                                                    <LegacyCard sectioned>
                                                        <div className='icon_child'>
                                                            <div className="icon_feature">
                                                                <img src={cart} />
                                                            </div>
                                                            <div>
                                                                <p>Revenue</p>
                                                                <span>{bundle.revenue}</span>
                                                            </div>
                                                        </div>
                                                    </LegacyCard>
                                                </Grid.Cell>
                                                <Grid.Cell columnSpan={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3}}>
                                                    <LegacyCard sectioned>
                                                        <div className='icon_child'>
                                                            <div className="icon_feature">
                                                                <img src={tag} />
                                                            </div>
                                                            <div>
                                                                <p>Average Order Value</p>
                                                                <span>{bundle.avgOrderValue}</span>
                                                            </div>
                                                        </div>
                                                    </LegacyCard>
                                                </Grid.Cell>
                                                <Grid.Cell columnSpan={{ xs: 3, sm: 3, md: 3, lg: 3, xl: 3}}>
                                                    <LegacyCard sectioned>
                                                        <div className='icon_child Click_rate'>
                                                            <div className="icon_feature">
                                                                <img src={keep} />
                                                            </div>
                                                            <div>
                                                                <p>Click-Through Rate</p>
                                                                <span>{bundle.clickThroughRate}</span>
                                                            </div>
                                                        </div>
                                                    </LegacyCard>
                                                </Grid.Cell>
                                            </Grid>
                                        </BlockStack>
                                    </div>
                                  
                                </LegacyCard>
                            ))}
                        </BlockStack>
                    </Layout.Section>
                </Layout>
            </Page>
        </>
    );
}
