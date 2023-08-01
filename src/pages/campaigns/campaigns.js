import React from "react";

import Image1 from "../../img/Container.png";
import Image2 from "../../img/Container (1).png";
import Image3 from "../../img/Container (2).png";
import "./campaigns.styles.scss";

const Campaigns = () => {
  return (
    <div className="campaigns-section">
      <div className="container">
        <div className="campaigns-section_header">
          <h2>Campaigns </h2>
          <p>
            We aim to stop public funds siphoning off and we have a plan that
            will help. We are working at the national and EU levels to advance.
          </p>
        </div>

        <div className="campaigns-section_items">
          <div className="grid-items">
            <img src={Image1} alt="image1"></img>

            <div className="details">
              <h4>Open Data Directive</h4>
              <p>
                In view of Russia&apos;s military action against the Ukrainian
                people, being concerned about ensuring that European funds In
                view of Russia&apos;s military action against the Ukrainian
                people,
              </p>
              <button>
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M17.92 12.3402C17.8724 12.2175 17.801 12.1053 17.71 12.0102L12.71 7.01022C12.6168 6.91698 12.5061 6.84302 12.3842 6.79256C12.2624 6.7421 12.1319 6.71613 12 6.71613C11.7337 6.71613 11.4783 6.82191 11.29 7.01022C11.1968 7.10346 11.1228 7.21415 11.0723 7.33597C11.0219 7.45779 10.9959 7.58836 10.9959 7.72022C10.9959 7.98652 11.1017 8.24191 11.29 8.43022L14.59 11.7202H7C6.73478 11.7202 6.48043 11.8256 6.29289 12.0131C6.10536 12.2006 6 12.455 6 12.7202C6 12.9854 6.10536 13.2398 6.29289 13.4273C6.48043 13.6149 6.73478 13.7202 7 13.7202H14.59L11.29 17.0102C11.1963 17.1032 11.1219 17.2138 11.0711 17.3356C11.0203 17.4575 10.9942 17.5882 10.9942 17.7202C10.9942 17.8522 11.0203 17.9829 11.0711 18.1048C11.1219 18.2267 11.1963 18.3373 11.29 18.4302C11.383 18.5239 11.4936 18.5983 11.6154 18.6491C11.7373 18.6999 11.868 18.726 12 18.726C12.132 18.726 12.2627 18.6999 12.3846 18.6491C12.5064 18.5983 12.617 18.5239 12.71 18.4302L17.71 13.4302C17.801 13.3351 17.8724 13.223 17.92 13.1002C18.02 12.8568 18.02 12.5837 17.92 12.3402Z"
                    fill="#1D6FA3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid-items">
            <img src={Image2} alt="image1"></img>

            <div className="details">
              <h4>Beneficial Ownership</h4>
              <p>
                In view of Russia&apos;s military action against the Ukrainian
                people, being concerned about ensuring that European funds In
                view of Russia&apos;s military action against the Ukrainian
                people,
              </p>
              <button>
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M17.92 12.3402C17.8724 12.2175 17.801 12.1053 17.71 12.0102L12.71 7.01022C12.6168 6.91698 12.5061 6.84302 12.3842 6.79256C12.2624 6.7421 12.1319 6.71613 12 6.71613C11.7337 6.71613 11.4783 6.82191 11.29 7.01022C11.1968 7.10346 11.1228 7.21415 11.0723 7.33597C11.0219 7.45779 10.9959 7.58836 10.9959 7.72022C10.9959 7.98652 11.1017 8.24191 11.29 8.43022L14.59 11.7202H7C6.73478 11.7202 6.48043 11.8256 6.29289 12.0131C6.10536 12.2006 6 12.455 6 12.7202C6 12.9854 6.10536 13.2398 6.29289 13.4273C6.48043 13.6149 6.73478 13.7202 7 13.7202H14.59L11.29 17.0102C11.1963 17.1032 11.1219 17.2138 11.0711 17.3356C11.0203 17.4575 10.9942 17.5882 10.9942 17.7202C10.9942 17.8522 11.0203 17.9829 11.0711 18.1048C11.1219 18.2267 11.1963 18.3373 11.29 18.4302C11.383 18.5239 11.4936 18.5983 11.6154 18.6491C11.7373 18.6999 11.868 18.726 12 18.726C12.132 18.726 12.2627 18.6999 12.3846 18.6491C12.5064 18.5983 12.617 18.5239 12.71 18.4302L17.71 13.4302C17.801 13.3351 17.8724 13.223 17.92 13.1002C18.02 12.8568 18.02 12.5837 17.92 12.3402Z"
                    fill="#1D6FA3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid-items">
            <img src={Image3} alt="image1"></img>
            <div className="details">
              <h4>EU Recovery Transparency</h4>
              <p>
                In view of Russia&apos;s military action against the Ukrainian
                people, being concerned about ensuring that European funds In
                view of Russia&apos;s military action against the Ukrainian
                people,
              </p>
              <button>
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M17.92 12.3402C17.8724 12.2175 17.801 12.1053 17.71 12.0102L12.71 7.01022C12.6168 6.91698 12.5061 6.84302 12.3842 6.79256C12.2624 6.7421 12.1319 6.71613 12 6.71613C11.7337 6.71613 11.4783 6.82191 11.29 7.01022C11.1968 7.10346 11.1228 7.21415 11.0723 7.33597C11.0219 7.45779 10.9959 7.58836 10.9959 7.72022C10.9959 7.98652 11.1017 8.24191 11.29 8.43022L14.59 11.7202H7C6.73478 11.7202 6.48043 11.8256 6.29289 12.0131C6.10536 12.2006 6 12.455 6 12.7202C6 12.9854 6.10536 13.2398 6.29289 13.4273C6.48043 13.6149 6.73478 13.7202 7 13.7202H14.59L11.29 17.0102C11.1963 17.1032 11.1219 17.2138 11.0711 17.3356C11.0203 17.4575 10.9942 17.5882 10.9942 17.7202C10.9942 17.8522 11.0203 17.9829 11.0711 18.1048C11.1219 18.2267 11.1963 18.3373 11.29 18.4302C11.383 18.5239 11.4936 18.5983 11.6154 18.6491C11.7373 18.6999 11.868 18.726 12 18.726C12.132 18.726 12.2627 18.6999 12.3846 18.6491C12.5064 18.5983 12.617 18.5239 12.71 18.4302L17.71 13.4302C17.801 13.3351 17.8724 13.223 17.92 13.1002C18.02 12.8568 18.02 12.5837 17.92 12.3402Z"
                    fill="#1D6FA3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
