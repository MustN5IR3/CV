﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class goLEFT : MonoBehaviour
{
    Animator m_animator;
    // Start is called before the first frame update
    void Start()
    {

        m_animator = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {

        bool moveLeftpressed = Input.GetKey("a");
        m_animator.SetBool("moveLeft", moveLeftpressed);
    }
}