import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import ArrowDownIcon from "components/icons/ArrowDownIcon";
import FilterIcon from "components/icons/FilterIcon";
import InfoIcon from "components/icons/InfoIcon";
import SwitchCurrIcon from "components/icons/SwitchCurrIcon";
import type { FunctionComponent } from "react";
import { useState } from "react";

interface IEchangeProps {}

const Exchange: FunctionComponent<IEchangeProps> = () => {
  const [fromCurr, setFromCurr] = useState("SUI");
  const [toCurr, setTOCurr] = useState("SPAK");
  return (
    <Box>
      <Box
        maxWidth="385px"
        margin="75px auto"
        sx={{
          background:
            "linear-gradient(90deg, rgb(97, 0, 255) 0%, rgb(255, 249, 94) 100%)",
        }}
        position="relative"
        p="1px"
      >
        <Box>
          <Box
            position="absolute"
            sx={{
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              zIndex: -1,
              filter: "blur(42px)",
              background:
                "linear-gradient(138deg, rgb(97 0 255), rgb(255 249 94))",
              borderRadius: "50%",
            }}
          ></Box>
        </Box>
        <Box sx={{ background: "#101221" }}>
          <Box
            py="20px"
            px="26px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight="bold" fontSize={13}>
              Swap
            </Typography>
            <FilterIcon />
          </Box>
          <Box
            mx="11px"
            sx={{ background: "#0C0E1E" }}
            py="12px"
            px="16px"
            display="flex"
            justifyContent="space-between"
            alignItems="start"
            position="relative"
          >
            <Box display="flex" flexDirection="column">
              <Typography color="#3A3E5C" fontSize={11}>
                From
              </Typography>
              <Typography fontWeight={500} mt="11px" mb="6px">
                0.0143
              </Typography>
              <Typography color="#3A3E5C" fontSize={11}>
                $246.76
              </Typography>
            </Box>
            <Box display="flex" gap="13px" alignItems="start">
              <Box
                py="7px"
                px="14px"
                sx={{
                  background: "#3A3E5C",
                  color: "#101221",
                  fontSize: 9,
                  fontWeight: 500,
                  mt: "9px",
                  cursor: "pointer",
                }}
              >
                Max
              </Box>
              <Box>
                <Select
                  IconComponent={ArrowDownIcon}
                  value={fromCurr}
                  onChange={(e) => setFromCurr(e.target.value)}
                  sx={{
                    color: "#F5F5F5",
                    background: "#101221 !important",
                    fieldset: {
                      border: "none !important",
                    },
                    width: "133px !important",
                    pr: 2,
                    ".MuiSelect-select": {
                      py: "10px !important",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      background: "#101221",
                      paddingRight: "22px !important",
                    },
                  }}
                >
                  <MenuItem
                    disabled={toCurr === "SUI"}
                    value="SUI"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <img src="/images/cryptocurrencies/SUI.png" alt="SUI" />
                    SUI
                  </MenuItem>
                  <MenuItem
                    disabled={toCurr === "SPAK"}
                    value="SPAK"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <img src="/images/cryptocurrencies/SPAK.png" alt="SPAK" />
                    SPAK
                  </MenuItem>
                </Select>
                <Typography
                  mt={1.5}
                  textAlign="end"
                  color="#3A3E5C"
                  fontSize={11}
                >
                  Balance: 0.0000
                </Typography>
              </Box>
            </Box>
            <Box
              bottom="-22px"
              left="calc(50% - 10px)"
              position="absolute"
              sx={{
                background:
                  "linear-gradient(90deg, rgb(97, 0, 255) 0%, rgb(255, 249, 94) 100%)",
              }}
              p="1px"
            >
              <Box
                display="flex"
                sx={{ background: "#101221", cursor: "pointer" }}
                px={1}
                py={0.6}
                onClick={() => {
                  setFromCurr(toCurr);
                  setTOCurr(fromCurr);
                }}
              >
                <SwitchCurrIcon />
              </Box>
            </Box>
          </Box>

          <Box
            mt={2}
            mx="11px"
            sx={{ background: "#1B1E3C" }}
            py="12px"
            px="16px"
            display="flex"
            justifyContent="space-between"
            alignItems="start"
          >
            <Box display="flex" flexDirection="column">
              <Typography color="#B6B9CF" fontSize={11}>
                To (Estimated)
              </Typography>
              <Typography fontWeight={500} mt="11px" mb="6px">
                0.0143
              </Typography>
              <Typography color="#B6B9CF" fontSize={11}>
                $246.76
              </Typography>
            </Box>
            <Box display="flex" gap="13px" alignItems="start">
              <Box
                py="7px"
                px="14px"
                sx={{
                  background: "#3A3E5C",
                  color: "#101221",
                  fontSize: 9,
                  fontWeight: 500,
                  mt: "9px",
                  cursor: "pointer",
                }}
              >
                Max
              </Box>
              <Box>
                <Select
                  onChange={(e) => setTOCurr(e.target.value)}
                  IconComponent={ArrowDownIcon}
                  value={toCurr}
                  sx={{
                    color: "#F5F5F5",
                    background: "#101221 !important",
                    width: "133px !important",
                    fieldset: {
                      border: "none !important",
                    },
                    pr: 2,
                    ".MuiSelect-select": {
                      py: "10px !important",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      background: "#101221",
                      paddingRight: "8px !important",
                    },
                  }}
                >
                  <MenuItem
                    disabled={fromCurr === "SUI"}
                    value="SUI"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <img src="/images/cryptocurrencies/SUI.png" alt="SUI" />
                    SUI
                  </MenuItem>
                  <MenuItem
                    disabled={fromCurr === "SPAK"}
                    value="SPAK"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <img src="/images/cryptocurrencies/SPAK.png" alt="SPAK" />
                    SPAK
                  </MenuItem>
                </Select>
                <Typography
                  mt={1.5}
                  textAlign="end"
                  color="#B6B9CF"
                  fontSize={11}
                >
                  Balance: 0.0000
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box px={2} mt={2.5} display="flex" alignItems="center" gap={1}>
            <InfoIcon />
            <Typography color="#3A3E5C" fontSize={12}>
              0.12 ETH = 1 SPAK ($0.12)
            </Typography>
          </Box>

          <Box mx={2} mt={2} pb={2}>
            <Button
              variant="contained"
              sx={{
                background: "#FFF95E !important",
                color: "black !important",
                py: "13px",
                fontWeight: 500,
                width: "100%",
                borderRadius: "0",
              }}
            >
              Swap
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        maxWidth="385px"
        margin="35px auto"
        sx={{
          background:
            "linear-gradient(90deg, rgb(97, 0, 255) 0%, rgb(255, 249, 94) 100%)",
        }}
        p="1px"
      >
        <Box py="14px" px="11px" sx={{ background: "#101221" }}>
          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight={500}>Minimum Received:</Typography>
            <Typography fontWeight={500}>0.02849 SPAK</Typography>
          </Box>
          <Box my={1} display="flex" justifyContent="space-between">
            <Typography fontWeight={500}>Price Impact:</Typography>
            <Typography fontWeight={500} color="#0FF896">
              {"<0.01%"}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography fontWeight={500}>Liquidity Provider Fee:</Typography>
            <Typography fontWeight={500}>0.006 ETH</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Exchange;
