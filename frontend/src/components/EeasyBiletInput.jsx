import React, { useEffect } from "react";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

function EeasyBiletInput({ name, control, placeholder,type,format,mask,pattern }) {
  useEffect(()=>{
    function doFormat(x, pattern, mask) {
      var strippedValue = x.replace(/[^0-9]/g, "");
      var chars = strippedValue.split('');
      var count = 0;
    
      var formatted = '';
      for (var i=0; i<pattern.length; i++) {
        const c = pattern[i];
        if (chars[count]) {
          if (/\*/.test(c)) {
            formatted += chars[count];
            count++;
          } else {
            formatted += c;
          }
        } else if (mask) {
          if (mask.split('')[i])
            formatted += mask.split('')[i];
        }
      }
      return formatted;
    }
    
    document.querySelectorAll('[data-mask]').forEach(function(e) {
      function format(elem) {
        const val = doFormat(elem.value, elem.getAttribute('data-format'));
        elem.value = doFormat(elem.value, elem.getAttribute('data-format'), elem.getAttribute('data-mask'));
        
        if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', val.length);
          range.select();
        } else if (elem.selectionStart) {
          elem.focus();
          elem.setSelectionRange(val.length, val.length);
        }
      }
      e.addEventListener('keyup', function() {
        format(e);
      });
      format(e)
    });
  },[])
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      mask="999.999.999-99"
      as={InputMask}
      render={({ field }) => (
        <input
        required
        {...field}
        type = {type || "text"}
        pattern = {pattern || null}
          className="form-control form-control-inp border-0"
          style={{ outline: "none" }}
          placeholder={placeholder}
        />
      )}
    />
  );
}

export default EeasyBiletInput;
