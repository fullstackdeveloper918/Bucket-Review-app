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
import { useState, useCallback } from 'react';
import { ChevronLeftIcon } from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';
import thumb from "./assets/reunion.png";
import keep from "./assets/Subtract.png";
import hotspot from "./assets/Vector.png";
import product_image from "./assets/pro_img.jpg"
import "./assets/reviewwdit.css";
import {
  DeleteIcon
} from '@shopify/polaris-icons';
import {
  EditIcon
} from '@shopify/polaris-icons';
import mobile from "./assets/SpaceBlack.png"
import grid from "./assets/grid.png"
import list from "./assets/list.png"
import { Select } from '@shopify/polaris';
import { ColorPicker } from '@shopify/polaris';
import { layout } from '@remix-run/route-config';
import { db } from '../db.server'; // Import the Prisma client

export async function loader() {

  const products = await db.product.findMany(); // Example query

  return  json(products); 

}


export default function Reviewedit() {
  const [isFullscreen, setFullscreen] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const [selected, setSelected] = useState(0);
  const [productselected, setProductSelected] = useState(0);

  const [name, setName] = useState('Customer reviews');
  const [colorvalue, setColorvalue] = useState('#00000');
  const [colorproductvalue, setProductColorvalue] = useState('');

  const [colorproductCvalue, setcolorproductCvalue] = useState('#545454');

  const [checked, setChecked] = useState(false);
  const [tagchecked, setTagChecked] = useState(false);
  const [shadowchecked, setshadowchecked] = useState(true);
  const [CTAcolorvalue, setCTAColorvalue] = useState(' 👉 Add To Cart');
  const [CTAcolorcodevalue, setCTAColorcodevalue] = useState('#00000');
  const [TBCcolorcodevalue, setTBCColorcodevalue] = useState('#555555');
  const [bgcolorcodevalue, setbgColorcodevalue] = useState('#FFFFF');


  const [Lifetimevalue, setLifetimevalue] = useState('Lifetime warranty & Free Return');

  const [selecteddate, setSelecteddate] = useState('1');
  const [selecteddirect, setSelecteddirect] = useState('cart');
  const [selectedCTA, setSelectedCTA] = useState('5');
  const [bundle, setSelectedBundle] = useState('4');


  const [color, setColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });


  const [selectedlayout, setSelectedlayout] = useState<string[]>(['grid']);

  const handleChangelayout = useCallback((value: string[]) => setSelected(value), []);

  const handleNameChange = useCallback((value: string) => setName(value), []);
  // const handleSubmit = useCallback(() => {
  //   setName('');

  // }, []);
  const handleActionClick = useCallback(() => {
    setFullscreen(false);
  }, []);
  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    [],

  );
  const handleSelectChange = useCallback(
    (value: string) => setSelecteddate(value),
    [],
  );
  const handleSelectproductChange = useCallback(
    (productselected: boolean) => setProductSelected(productselected),
    [],
  );
  const handleredirectChange = useCallback(
    (value: string) => setSelecteddirect(value),
    [],
  );
  const handleCTAChange = useCallback(
    (value: string) => setSelectedCTA(value),
    [],
  );
  const handlecolorChange = useCallback(
    (value: string) => setColorvalue(value),
    [],
  );
  const handleCTAColorChange = useCallback(
    (value: string) => setCTAColorvalue(value),
    [],
  );
  const handleCTAColorcodeChange = useCallback(
    (value: string) => setCTAColorcodevalue(value),
    [],
  );
  const handleTBCColorcodeChange = useCallback(
    (value: string) => setTBCColorcodevalue(value),
    [],
  );
  const handlebgColorcodeChange = useCallback(
    (value: string) => setbgColorcodevalue(value),
    [],
  );

  const handleLifetimeChange = useCallback(
    (value: string) => setLifetimevalue(value),
    [],
  );
  const handleproductcolorChange = useCallback(
    (value: string) => setProductColorvalue(value),
    [],
  );
  const handleproductcolorCChange = useCallback(
    (valueC: string) => setcolorproductCvalue(valueC),
    [],
  );
  const handlebundleChange = useCallback(
    (value: string) => setProductColorvalue(value),
    [],
  );
  const handleChange = useCallback(
    (newChecked: boolean) => setChecked(newChecked),
    [],
  );

  const handletagChange = useCallback(
    (newtagchecked: boolean) => setTagChecked(newtagchecked),
    [],
  );
  const handleBundleChange = useCallback(
    (newBundlechecked: boolean) => setSelectedBundle(newBundlechecked),
    [],
  );

  const handleshadowChange = useCallback(
    (newshadowchecked: boolean) => setshadowchecked(newshadowchecked),
    [],
  )
  const options = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ];
  const optionsproduct = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ]
  const optionsBundle = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
  ]
  const optionsredirect = [
    { label: 'cart', value: 'cart' },
    { label: 'checkout', value: 'checkout' },
  ];
  const optionsCTA = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ];
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
    {
      id: 'accepts-widget-1',
      content: '🎨️ Widget',
      panelID: 'accepts-widget-content-1',
    },
  ];


  // Content for each tab
  const tabContent = [
    [
      {
        product_title: "Necklace 14K",
        product_image: product_image, // Make sure to replace with the actual image path or variable
        ratings: [
          { rating_image: product_image, rating: "3", rating_description: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
          { rating_image: product_image, rating: "4", rating_description: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
          { rating_image: product_image, rating: "1", rating_description: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
          { rating_image: product_image, rating: "3", rating_description: "Lorem ipsum dolor sit amet, consectetur adipiscing..." },
          { rating_image: product_image, rating: "4", rating_description: "Lorem ipsum dolor sit amet, consectetur adipiscing..." }
        ]
      }
    ],
    [
      {
        content: (
          <Box padding="4" border="1px solid #ddd" borderRadius="8px">

            <div className='view_main'>
              <div className="head_main">
                <h2 className='heading_content'>You’re Almost There!</h2>
                <h4 className='subheading'> Make It Stand Out</h4>
                <div className='layout_content'>
                  <h2>Layout</h2>
                  <div className='main_layout'>
                    {/* <ChoiceList
                    title="grid layout"
                    choices={[
                      {label: 'grid', value: 'grid'},
                      {label: 'List', value: 'List'},
                    ]}
                    selected={selectedlayout}
                    onChange={handleChangelayout}
                  /> */}
                    <div className='grid_layout'>
                      <img src={grid} />
                      grid
                      <span>(Recommended)</span>
                    </div>
                    <div className='list_layout'>
                      <img src={list} />
                      List
                    </div>
                  </div>

                </div>
                <div className='inform_main'>
                  <div className="infom_title">
                    <h2>Title</h2>

                  </div>
                  <div className='inform_Input form_inputs'>

                    <Form>
                      <TextField
                        value={name}
                        onChange={handleNameChange}
                        label="text"
                        type="text"
                        autoComplete="text"

                      />
                      <Select
                        label="size"
                        options={options}
                        onChange={handleSelectChange}
                        value={selecteddate}
                      />
                      <div className='color_picker_csrt'>
                        {/* <ColorPicker onChange={setColor} color={color} /> */}
                        <TextField
                          value={colorvalue}
                          onChange={handlecolorChange}
                          label="color"
                          type="text"
                          autoComplete="color"

                        />
                      </div>

                      <div className='product_form form_inputs'>
                        <h2> Product title</h2>

                        <Select
                          label="size"
                          options={optionsproduct}
                          onChange={handleSelectproductChange}
                          value={productselected}
                        />
                        <TextField
                          value={colorproductvalue}
                          onChange={handleproductcolorChange}
                          label="color"
                          type="text"
                          autoComplete="color"

                        />

                      </div>

                      <div className='Bundle_Cost form_inputs'>
                        <h2>Bundle Cost</h2>
                        <Select
                          label="size"
                          options={optionsBundle}
                          onChange={handleBundleChange}
                          value={bundle}
                        />
                        <TextField
                          value={colorproductCvalue}
                          onChange={handleproductcolorCChange}
                          label="color"
                          type="text"
                          autoComplete="color"

                        />
                        <Checkbox
                          label="Display Compared-At Price"
                          checked={checked}
                          onChange={handleChange}
                        />
                        <Checkbox
                          label="Display “Save” tag"
                          checked={tagchecked}
                          onChange={handletagChange}
                        />
                      </div>

                      <div className='Call_to_action'>
                        <h2>Call To Action Button</h2>
                        <TextField
                          value={CTAcolorvalue}
                          onChange={handleCTAColorChange}
                          label="color"
                          type="text"
                          autoComplete="color"

                        />
                        <Select
                          label="size"
                          options={options}
                          onChange={handleSelectproductChange}
                          value={productselected}
                        />
                        <Select
                          label="Redirect To"
                          options={optionsredirect}
                          onChange={handleredirectChange}
                          value={selecteddirect}
                        />
                        <TextField
                          value={CTAcolorcodevalue}
                          onChange={handleCTAColorcodeChange}
                          type="text"
                          autoComplete="color"

                        />
                      </div>

                      <div className='belowto_cTA form_inputs'>
                        <h2>Text Below CTA</h2>

                        <TextField
                          value={Lifetimevalue}
                          onChange={handleLifetimeChange}
                          type="text"
                          autoComplete="text"

                        />
                        <Select
                          label="size"
                          options={optionsCTA}

                          onChange={handleCTAChange}
                          value={selectedCTA}
                        />
                        <TextField
                          value={TBCcolorcodevalue}
                          onChange={handleTBCColorcodeChange}
                          type="text"
                          autoComplete="color"

                        />
                      </div>
                      <div className='Background form_inputs'>
                        <TextField
                          value={bgcolorcodevalue}
                          onChange={handlebgColorcodeChange}
                          type="text"
                          autoComplete="color"

                        />
                        <Checkbox
                          label="Display Shadow"
                          checked={shadowchecked}
                          onChange={handleshadowChange}
                        />
                      </div>
                      <div className='btn_from'>
                        <Button >Back</Button>
                        <Button className="submit_csrt" submit>Launch Bundle!</Button>

                      </div>
                    </Form>
                  </div>


                </div>
              </div>
              <div className='head_img'>
                <img src={mobile} height={500} width={430} />
              </div>

            </div>
          </Box>
        )

      }
    ]
  ];

  return (
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
                          <img src={hotspot} />
                        </div>
                        <div>
                          <p>Reviews Collected</p>
                          <span>280</span>
                        </div>
                      </div>
                    </LegacyCard>
                  </Grid.Cell>
                  <Grid.Cell columnSpan={{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4 }}>
                    <LegacyCard sectioned>
                      <div className='icon_child'>
                        <div className="icon_feature">
                          <img src={thumb} />
                        </div>
                        <div>
                          <p>Average Rating</p>
                          <span>4.7</span>
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
                  <Card>
                    {selected === 0 && tabContent[0].map((block, index) => (
                      <Box key={index} padding="4" border="1px solid #ddd" borderRadius="8px">
                        <div class="product_infor">
                          <img src={block.product_image} />
                          <Text as="h3">{block.product_title}</Text>
                        </div>
                      </Box>
                    ))}
                    <div className='main_Product_rating'>

                      <div className='table_content'>
                        {selected === 0 && (
                          <div className="main_Product_rating">
                            <div className="table_content">
                              <table className="table_rating">
                                <thead>
                                  <tr>
                                    <th>Image</th>
                                    <th>Rating</th>
                                    <th>Comment</th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {tabContent[0].map((block, index) => (
                                    block.ratings && block.ratings.map((rating, ratingIndex) => (
                                      <tr key={ratingIndex}>
                                        <td>
                                          <img src={rating.rating_image} alt={`Rating for ${block.product_title}`} />
                                        </td>
                                        <td>{rating.rating}</td>
                                        <td>{rating.rating_description}</td>
                                        <td>
                                          <div className="mainproduct_edit_delete">
                                            <div className="product_edit_toggle">
                                              <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider round slider_csrt"></span>
                                              </label>
                                            </div>
                                            <div className="product_edit_delete">
                                              <Icon source={DeleteIcon} tone="base" />
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          <div className="product_edit">
                                            <Icon source={EditIcon} tone="base" />
                                            Edit
                                          </div>
                                        </td>
                                      </tr>
                                    ))
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}

                        {selected === 1 && tabContent[1].map((block, index) => (
                          <div key={index}>{block.content}</div>
                        ))}






                      </div>

                    </div>

                  </Card>



                </Tabs>
              </BlockStack>

            </Layout.Section>
          </Layout>
        </Page>
      </div>
    </div>
  );
}