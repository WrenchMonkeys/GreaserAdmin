<script lang="ts">
  import {SUPPORTED_PHONE_COUNTRY_CODES} from '$lib/constants';

  export let countryCode = '';
  export let phoneNumber = ''

  const handlePhoneNumberFormat = (currPhoneNumber: string) => {
    let arr = currPhoneNumber.split('');

    if (arr.length >= 4 && arr[0] !== '(' && arr[4] !== ')') {
      const split1 = arr.slice(0, 3);
      const split2 = arr.slice(3, );
      arr = ['(', ...split1, ') ', ...split2];

    }

    if (arr.length > 9 && arr[9] !== '-') {
      const split1 = arr.slice(0, 9);
      const split2 = arr.slice(9,);
      arr = [...split1, '-', ...split2];
    }

    phoneNumber = arr.join('');
  }

  $: handlePhoneNumberFormat(phoneNumber)
</script>

<div class="phone-number-container d-flex flex-row mb-2 form-control p-0">
  <select name="countryCode" id="country-code-select" class="p-2" bind:value={countryCode}>
    {#each SUPPORTED_PHONE_COUNTRY_CODES as supportedCountryCode, i}
      <option value={supportedCountryCode.ext} selected={i === 0}>{supportedCountryCode.countryCode}</option>
    {/each}
  </select>
  <p class="px-3 mt-auto mb-auto text-center font-weight-bold">+{countryCode}</p>
  <input type="tel" bind:value={phoneNumber} class="phone-number-input flex-fill" maxlength="14" minlength="0" pattern="\d{10}">
</div>

<style>
  .phone-number-container {
      & .phone-number-input {
          border: none;

      }
  }
  #country-code-select {
      border-radius: 0.2rem;
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      border: none;
  }
</style>