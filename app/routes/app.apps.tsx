import { useRef, useState, useEffect, useCallback } from "react";
import { Box, Layout, Page, Text, BlockStack ,Card ,Grid} from "@shopify/polaris";
import { LegacyCard, LegacyTabs } from "@shopify/polaris"; // Correct import
import "./assets/styles.css"; // Ensure the CSS file is imported
import First from "./assets/1.png";
import Second from "./assets/2.png";
import Third from "./assets/3.png";
import Fourth from "./assets/4.png";
import Fifth from "./assets/5.png";
import FiArrowRightCircle  from "./assets/Union.png";
import { Icon } from '@shopify/polaris'; // Add this import for Icon component

export default function Apps() {
  const [visibleImages, setVisibleImages] = useState(5); // Start with 5 images
  const imageUrls = [
    First,
    Second,
    Third,
    Fourth,
    Fifth,
  ];
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex: number) => setSelected(selectedTabIndex),
    []
  );

  // Define the type of imageContainerRef as a reference to a HTMLDivElement
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const loadMoreImages = () => {
    if (visibleImages < imageUrls.length) {
      setVisibleImages(visibleImages + 5); // Load 5 more images
    }
  };

  // Detect when the user has scrolled to the end of the container
  useEffect(() => {
    const handleScroll = () => {
      const container = imageContainerRef.current;
      if (container && container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
        loadMoreImages(); // Load more images when the user scrolls to the end
      }
    };

    const container = imageContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    // Cleanup the event listener when component unmounts
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [visibleImages]);

  const tabs = [
    {
      id: "all-customers-1",
      content: "All apps",
      panelID: "all-customers-content-1",
    },
    {
      id: "accepts-marketing-1",
      content: "📈 Trending Apps",
      panelID: "accepts-marketing-content-1",
    },
    {
      id: "repeat-customers-1",
      content: "💰 Sales",
      panelID: "repeat-customers-content-1",
    },
    {
      id: "prospects-1",
      content: "📣 Marketing",
      panelID: "prospects-content-1",
    },
    {
        id: "Offers-1",
        content: "⭐️ Offers",
        panelID: "Offers-1",
      },
      {
        id: "Ux-1",
        content: "🎨 UX",
        panelID: "UX-1",
      },
      {
        id: "⚡️Engagement-1",
        content: "⚡️Engagement",
        panelID: "⚡️Engagement-1",
      },
  ];

   // Content for each tab
   const tabContent = [
    [
      { title: "Sales", description: "Volume Discounts", url: "#", icon: FiArrowRightCircle },
      { title: "Sales", description: "Cart Drawer", url: "#", icon: FiArrowRightCircle },
      { title: "Marketing", description: "Pop-ups", url: "#", icon: FiArrowRightCircle },
      { title: "Marketing", dpescription: "Back-in-Stock", url: "#", icon: FiArrowRightCircle },
      { title: "Engagement", description: "Instagram Feed", url: "#", icon: FiArrowRightCircle },
      { title: "Sales", description: "Stock Scarcity", url: "#", icon: FiArrowRightCircle },
      { title: "Offers", description: "Product Bundles", url: "#", icon: FiArrowRightCircle },
      { title: "Marketing", description: "Product Reviews", url: "#", icon: FiArrowRightCircle },
      
      { title: "Engagement", description: "Visitor Replays", url: "#", icon: FiArrowRightCircle },
      { title: "Marketing", description: "Announcement Bar", url: "#", icon: FiArrowRightCircle },
      { title: "Sales", description: "BOGO & Buy X Get Y", url: "#", icon: FiArrowRightCircle },
      { title: "Sales", description: "Sticky Add to Cart", url: "#", icon: FiArrowRightCircle },
      
    ],
    [
      { title: "Trending App 1", description: "Trending App 1 Description", url: "#", icon: FiArrowRightCircle },
      { title: "Trending App 2", description: "Trending App 2 Description", url: "#", icon: FiArrowRightCircle },
      { title: "Trending App 3", description: "Trending App 3 Description", url: "#", icon: FiArrowRightCircle },
    ],
    [
      { title: "Sales App 1", description: "Sales App 1 Description", url: "#", icon: FiArrowRightCircle },
      { title: "Sales App 2", description: "Sales App 2 Description", url: "#", icon: FiArrowRightCircle },
    ],
    [
      { title: "Marketing App 1", description: "Marketing App 1 Description", url: "#", icon: FiArrowRightCircle },
      { title: "Marketing App 2", description: "Marketing App 2 Description", url: "#", icon: FiArrowRightCircle },
      { title: "Marketing App 3", description: "Marketing App 3 Description", url: "#", icon: FiArrowRightCircle },
    ],
    [
      { title: "Offer 1", description: "Offer 1 Description", url: "#", icon: FiArrowRightCircle },
    ],
    [
      { title: "UX App 1", description: "UX App 1 Description", url: "#", icon: FiArrowRightCircle },
    ],
    [
      { title: "Engagement App 1", description: "Engagement App 1 Description", url: "#", icon: FiArrowRightCircle },
    ]
  ];

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <BlockStack gap="300">
            <Text as="h1" variant="headingLg">
              Top 5 Apps By Our Users
            </Text>

            {/* Image grid wrapper with scrollable images */}
            <div className="imageGridWrapper" ref={imageContainerRef}>
              {imageUrls.slice(0, visibleImages).map((url, index) => (
                <div className="imageBox" key={index}>
                  <Box>
                    <img src={url} alt={`App ${index + 1}`} className="image" />
                  </Box>
                </div>
              ))}
            </div>
          </BlockStack>
          <LegacyCard>
            <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
              <LegacyCard.Section title={tabs[selected].content}>
                <BlockStack gap="20">
                <Grid>
                  {tabContent[selected].map((block, index) => (
                    <Grid.Cell columnSpan={{xs: 4, sm: 4, md: 4, lg: 4, xl: 4}}>
                      <LegacyCard>
                     <Card>
                    <Box key={index} padding="4" border="1px solid #ddd" borderRadius="8px">
                      <Text as="h3">{block.title}</Text>
                      <Text as="h2">{block.description}</Text>
                      <a href={block.url} style={{ color: '#007BFF' }}>
                      <Icon source={block.icon} tone="base" />
                        Learn More
                      </a>
                    </Box>
                    </Card>
                    </LegacyCard>
               </Grid.Cell>
                  ))}
                     </Grid>
                </BlockStack>
              </LegacyCard.Section>
            </LegacyTabs>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
