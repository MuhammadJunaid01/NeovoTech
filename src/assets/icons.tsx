import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {IIcon} from '../interfaces';

export const MessageIcon: React.FC<IIcon> = React.memo(
  ({color = '#4b5563', size = 20}) => {
    return (
      <Svg
        fill={color}
        width={size}
        height={size}
        viewBox="0 0 598.494 598.494">
        <G>
          <G>
            <Path
              d="M574.238,180.981c-14.947-35.006-36.225-66.455-63.242-93.474c-27.018-27.019-58.466-48.298-93.471-63.247
			C381.279,8.783,342.782,0.791,303.103,0.509c-0.709-0.005-1.434-0.008-2.138-0.008c-39.698,0-78.299,7.768-114.732,23.086
			C151.072,38.372,119.428,59.53,92.18,86.473c-27.261,26.957-48.774,58.372-63.941,93.374
			C12.512,216.14,4.332,254.695,3.924,294.444c-0.4,39.119,6.665,77.108,21.01,113.049L1.577,528.263
			c-3.333,17.233,1.157,34.875,12.318,48.401c11.184,13.554,27.642,21.328,45.153,21.328c3.737,0,7.5-0.362,11.187-1.075
			l120.769-23.356c34.971,13.956,71.914,21.025,109.946,21.025c1.03,0,2.061-0.005,3.093-0.016
			c39.924-0.408,78.635-8.655,115.061-24.514c35.13-15.294,66.624-36.977,93.609-64.446c26.981-27.467,48.102-59.343,62.775-94.742
			c15.211-36.697,22.781-75.545,22.499-115.464C597.705,255.725,589.716,217.228,574.238,180.981z M303.607,551.734
			c-0.887,0.009-1.771,0.014-2.657,0.014c-35.829,0-69.926-7.416-100.842-20.791c-1.979-0.856-4.103-1.291-6.238-1.291
			c-0.998,0-1.998,0.095-2.987,0.286L62.098,554.859c-1.032,0.199-2.05,0.294-3.05,0.294c-9.612,0-17.33-8.832-15.411-18.755
			l24.908-128.785c0.601-3.106,0.251-6.321-1.005-9.226c-13.707-31.682-21.154-66.702-20.777-103.504
			C48.187,155.745,162.04,43.342,300.965,43.342c0.604,0,1.227,0.002,1.833,0.007c138.931,0.988,251.366,113.427,252.35,252.36
			C556.136,435.454,443.349,550.306,303.607,551.734z"
            />
            <Path
              d="M59.048,598.493c-17.661,0-34.26-7.84-45.539-21.51C2.252,563.34-2.276,545.548,1.086,528.168l23.33-120.627
			C10.087,371.592,3.024,333.539,3.424,294.438c0.408-39.814,8.603-78.435,24.355-114.79c15.192-35.06,36.741-66.529,64.048-93.531
			c27.295-26.99,58.992-48.183,94.211-62.991C222.534,7.782,261.201,0.001,300.965,0.001c0.705,0,1.431,0.003,2.141,0.008
			c39.745,0.282,78.308,8.287,114.616,23.792c35.064,14.974,66.565,36.289,93.628,63.353s48.376,58.566,63.349,93.631
			c15.503,36.306,23.507,74.869,23.788,114.616c0.282,39.985-7.3,78.898-22.537,115.659c-14.699,35.46-35.855,67.39-62.881,94.901
			c-27.03,27.516-58.578,49.234-93.767,64.554c-36.486,15.885-75.264,24.146-115.255,24.556
			c-39.077,0.396-77.164-6.673-113.093-20.991L70.329,597.409C66.609,598.127,62.813,598.493,59.048,598.493z M300.965,1.001
			c-39.63,0-78.167,7.754-114.538,23.047c-35.101,14.759-66.691,35.881-93.896,62.78c-27.216,26.912-48.692,58.275-63.833,93.217
			c-15.7,36.232-23.867,74.723-24.273,114.403c-0.399,39.018,6.658,76.99,20.975,112.858l0.054,0.137l-0.028,0.144L2.067,528.358
			c-3.304,17.087,1.147,34.577,12.213,47.988c11.089,13.439,27.406,21.146,44.768,21.146c3.702,0,7.434-0.358,11.092-1.066
			l120.913-23.384l0.136,0.054c34.9,13.928,71.829,20.99,109.761,20.99c1.028,0,2.057-0.005,3.088-0.016
			c39.856-0.407,78.503-8.641,114.866-24.472c35.069-15.269,66.512-36.915,93.452-64.339c26.935-27.42,48.021-59.242,62.67-94.583
			c15.186-36.637,22.743-75.419,22.461-115.27c-0.281-39.614-8.257-78.047-23.708-114.23
			c-14.922-34.947-36.164-66.343-63.136-93.316c-26.973-26.973-58.367-48.217-93.313-63.14
			C381.143,9.268,342.71,1.291,303.099,1.009C302.392,1.004,301.668,1.001,300.965,1.001z M59.048,555.653
			c-4.829,0-9.384-2.163-12.496-5.935c-3.089-3.744-4.331-8.634-3.406-13.415l24.908-128.785c0.584-3.022,0.248-6.11-0.974-8.933
			c-14.183-32.782-21.187-67.674-20.818-103.708c0.69-67.397,27.569-130.718,75.687-178.298
			c48.088-47.551,111.664-73.738,179.016-73.738c0.605,0,1.229,0.002,1.837,0.007c67.325,0.479,130.631,26.972,178.255,74.597
			c47.624,47.626,74.114,110.933,74.591,178.259c0.99,140.02-112.072,255.099-252.035,256.529
			c-36.006,0.349-70.943-6.646-103.703-20.818c-2.805-1.213-5.932-1.554-8.932-0.973L62.193,555.35
			C61.151,555.551,60.093,555.653,59.048,555.653z M300.965,43.842c-67.087,0-130.413,26.085-178.312,73.449
			c-47.929,47.394-74.703,110.465-75.39,177.597c-0.367,35.893,6.609,70.647,20.736,103.301c1.301,3.007,1.66,6.299,1.037,9.519
			L44.128,536.493c-0.868,4.487,0.297,9.076,3.196,12.589c2.921,3.541,7.194,5.571,11.724,5.571c0.981,0,1.976-0.096,2.955-0.285
			l128.785-24.907c3.196-0.615,6.53-0.256,9.519,1.037c32.63,14.116,67.419,21.111,103.295,20.736
			c139.413-1.425,252.031-116.051,251.045-255.522c-0.475-67.062-26.861-130.12-74.298-177.559
			c-47.438-47.438-110.494-73.827-177.556-74.304C302.189,43.844,301.568,43.842,300.965,43.842z"
            />
          </G>
          <G>
            <Path
              d="M428.73,173.09H172.22c-34.034,0-61.723,27.689-61.723,61.723c0,34.034,27.688,61.723,61.723,61.723h256.51
			c34.033,0,61.723-27.688,61.723-61.723C490.453,200.779,462.765,173.09,428.73,173.09z M428.73,253.695H172.22
			c-10.429,0-18.883-8.454-18.883-18.883c0-10.428,8.454-18.882,18.883-18.882h256.51c10.429,0,18.882,8.453,18.882,18.882
			S439.159,253.695,428.73,253.695z"
            />
            <Path
              d="M428.73,297.035H172.22c-34.31,0-62.223-27.913-62.223-62.223s27.913-62.223,62.223-62.223h256.51
			c34.31,0,62.223,27.913,62.223,62.223S463.04,297.035,428.73,297.035z M172.22,173.59c-33.758,0-61.223,27.464-61.223,61.223
			s27.464,61.223,61.223,61.223h256.51c33.759,0,61.223-27.464,61.223-61.223s-27.464-61.223-61.223-61.223H172.22z M428.73,254.195
			H172.22c-10.688,0-19.383-8.695-19.383-19.383s8.695-19.382,19.383-19.382h256.51c10.688,0,19.382,8.695,19.382,19.382
			S439.418,254.195,428.73,254.195z M172.22,216.43c-10.136,0-18.383,8.246-18.383,18.382s8.247,18.383,18.383,18.383h256.51
			c10.136,0,18.382-8.247,18.382-18.383s-8.246-18.382-18.382-18.382H172.22z"
            />
          </G>
          <G>
            <Path
              d="M319.533,318.223H172.22c-34.034,0-61.723,27.688-61.723,61.723c0,34.033,27.688,61.723,61.723,61.723h147.313
			c34.034,0,61.723-27.689,61.723-61.723C381.256,345.912,353.567,318.223,319.533,318.223z M319.533,398.829H172.22
			c-10.429,0-18.883-8.453-18.883-18.883c0-10.429,8.454-18.883,18.883-18.883h147.313c10.429,0,18.883,8.454,18.883,18.883
			S329.962,398.829,319.533,398.829z"
            />
            <Path
              d="M319.533,442.168H172.22c-34.31,0-62.223-27.913-62.223-62.223s27.913-62.223,62.223-62.223h147.313
			c34.31,0,62.223,27.913,62.223,62.223S353.843,442.168,319.533,442.168z M172.22,318.723c-33.758,0-61.223,27.465-61.223,61.223
			s27.464,61.223,61.223,61.223h147.313c33.758,0,61.223-27.465,61.223-61.223s-27.465-61.223-61.223-61.223H172.22z
			 M319.533,399.329H172.22c-10.688,0-19.383-8.695-19.383-19.383s8.695-19.383,19.383-19.383h147.313
			c10.688,0,19.383,8.695,19.383,19.383S330.221,399.329,319.533,399.329z M172.22,361.563c-10.136,0-18.383,8.246-18.383,18.383
			s8.247,18.383,18.383,18.383h147.313c10.137,0,18.383-8.246,18.383-18.383s-8.246-18.383-18.383-18.383H172.22z"
            />
          </G>
        </G>
      </Svg>
    );
  },
);
export const SearchIcon: React.FC<IIcon> = React.memo(
  ({color = '#4b5563', size = 20}) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
          fill={color}
        />
      </Svg>
    );
  },
);
export const SliderIcon: React.FC<IIcon> = React.memo(
  ({color = '#4b5563', size = 20}) => {
    return (
      <Svg fill={color} width={size} height={size} viewBox="0 0 24 24">
        <Path
          d="M12,12a2.993,2.993,0,0,1-1-5.816V3a1,1,0,0,1,2,0V6.184A2.993,2.993,0,0,1,12,12Zm8-1.816V3a1,1,0,0,0-2,0v7.184a3,3,0,1,0,2,0ZM5,14A2.993,2.993,0,0,0,6,8.184V3A1,1,0,0,0,4,3V8.184A2.993,2.993,0,0,0,5,14Zm15,7V19a1,1,0,0,0-2,0v2a1,1,0,0,0,2,0Zm-9-6v6a1,1,0,0,0,2,0V15a1,1,0,0,0-2,0ZM4,17v4a1,1,0,0,0,2,0V17a1,1,0,0,0-2,0Z"
          stroke={color}
        />
      </Svg>
    );
  },
);
export const StarIcon: React.FC<IIcon> = React.memo(
  ({color = '#4b5563', size = 20}) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  },
);
export const HomeIcon: React.FC<IIcon> = React.memo(
  ({color = '#4b5563', size = 20}) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <G>
          <Rect width="24" height="24" fill="none" />
          <Path
            d="M9 21H4C3.44772 21 3 20.5523 3 20V12.4142C3 12.149 3.10536 11.8946 3.29289 11.7071L11.2929 3.70711C11.6834 3.31658 12.3166 3.31658 12.7071 3.70711L20.7071 11.7071C20.8946 11.8946 21 12.149 21 12.4142V20C21 20.5523 20.5523 21 20 21H15M9 21H15M9 21V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V21"
            stroke={color}
            stroke-linejoin="round"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_15_3">
            <Rect width="24" height="24" fill="none" />
          </ClipPath>
        </Defs>
      </Svg>
    );
  },
);
export const CalendarIcon: React.FC<IIcon> = React.memo(
  ({color = '#4b5563', size = 20}) => {
    return (
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <Path
          d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
        />
      </Svg>
    );
  },
);
export const NotificationBellIcon: React.FC<IIcon> = React.memo(
  ({color = '#4b5563', size = 20}) => {
    return (
      <Svg width={size} height={size} viewBox="-1.5 0 20 20">
        <G
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd">
          <G
            id="Dribbble-Light-Preview"
            transform="translate(-141.000000, -720.000000)"
            fill={color}>
            <G id="icons" transform="translate(56.000000, 160.000000)">
              <Path
                d="M97.75,574 L89.25,574 L89.25,568 C89.25,565.334 91.375,564 93.4989375,564 L93.5010625,564 C95.625,564 97.75,565.334 97.75,568 L97.75,574 Z M94.5625,577 C94.5625,577.552 94.0865,578 93.5,578 C92.9135,578 92.4375,577.552 92.4375,577 L92.4375,576 L94.5625,576 L94.5625,577 Z M100.9375,574 L99.875,574 L99.875,568 C99.875,564.447 97.359,562.475 94.5625,562.079 L94.5625,560 L92.4375,560 L92.4375,562.079 C89.641,562.475 87.125,564.447 87.125,568 L87.125,574 L86.0625,574 C85.476,574 85,574.448 85,575 C85,575.552 85.476,576 86.0625,576 L90.3125,576 L90.3125,577 C90.3125,578.657 91.7394375,580 93.5,580 C95.2605625,580 96.6875,578.657 96.6875,577 L96.6875,576 L100.9375,576 C101.524,576 102,575.552 102,575 C102,574.448 101.524,574 100.9375,574 L100.9375,574 Z"
                id="notification_bell-[#1398]"></Path>
            </G>
          </G>
        </G>
      </Svg>
    );
  },
);
export const MenuIcon: React.FC<IIcon> = React.memo(
  ({color = '#4b5563', size = 20}) => {
    return (
      <Svg width={size} height={size} viewBox="-0.5 0 25 25" fill="none">
        <Path
          d="M19 3.32001H16C14.8954 3.32001 14 4.21544 14 5.32001V8.32001C14 9.42458 14.8954 10.32 16 10.32H19C20.1046 10.32 21 9.42458 21 8.32001V5.32001C21 4.21544 20.1046 3.32001 19 3.32001Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 3.32001H5C3.89543 3.32001 3 4.21544 3 5.32001V8.32001C3 9.42458 3.89543 10.32 5 10.32H8C9.10457 10.32 10 9.42458 10 8.32001V5.32001C10 4.21544 9.10457 3.32001 8 3.32001Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19 14.32H16C14.8954 14.32 14 15.2154 14 16.32V19.32C14 20.4246 14.8954 21.32 16 21.32H19C20.1046 21.32 21 20.4246 21 19.32V16.32C21 15.2154 20.1046 14.32 19 14.32Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 14.32H5C3.89543 14.32 3 15.2154 3 16.32V19.32C3 20.4246 3.89543 21.32 5 21.32H8C9.10457 21.32 10 20.4246 10 19.32V16.32C10 15.2154 9.10457 14.32 8 14.32Z"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
    );
  },
);
