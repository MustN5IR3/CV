using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class footsteps : MonoBehaviour
{
    CharacterController cc;
    public AudioSource audioS;
    void Start()
    {
        cc = GetComponent<CharacterController>();
    }


    void Update()
    {
        if(cc.isGrounded==true && cc.velocity.magnitude > 2f)
        {
            audioS.enabled = true;
            audioS.loop = true;
        }
        if(cc.velocity.magnitude == 0)
        {
            audioS.enabled = false;
            audioS.loop = false;
        }
    }
}
